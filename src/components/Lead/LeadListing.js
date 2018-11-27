import React, { Component, Fragment } from "react";
import LeadRow from "./LeadRow";
import LeadForm from "./LeadForm";
import { ContentListing, HocForm } from "../Shared";
import { LeadFields } from "../../Utilities/FormsModel";
import axios from "axios";

class LeadListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      ctcModal: false
    };
    this.currentLead = null;
    this.selectedLeads = [];
    this.toggle = this.toggle.bind(this);
    this.toggleCtcModal = this.toggleCtcModal.bind(this);
    this.addLeadCall = this.addLeadCall.bind(this);
    this.renderListRow = this.renderListRow.bind(this);
    this.handleListCheckboxChange = this.handleListCheckboxChange.bind(this);
    this.converToClient = this.converToClient.bind(this);
    this.convertToClientCall = this.convertToClientCall.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCtcModal() {
    this.setState({
      ctcModal: !this.state.ctcModal
    });
  }

  handleListCheckboxChange(isChecked, leadId) {
    isChecked
      ? this.addToSelectedLeads(leadId)
      : this.removeToSelectedLeads(leadId);
  }

  addToSelectedLeads(leadId) {
    this.selectedLeads.push(leadId);
    console.log(this.selectedLeads);
  }

  removeToSelectedLeads(leadId) {
    this.selectedLeads = this.selectedLeads.filter(id => {
      if (id !== leadId) {
        return true;
      }
    });
    console.log(this.selectedLeads);
  }

  addLeadCall(formData) {
    let $this = this;
    this.toggle();
    axios({
      method: "post",
      url: "/api/v1/leads",
      data: {
        lead: formData
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
        $this.props.updateLeads(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  convertToClientCall(formData) {
    let $this = this;
    axios({
      method: "post",
      url: `/api/v1/leads/${this.currentLead.id}/convert_to_client`,
      data: {
        lead: formData
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
        $this.props.updateLead(response.data.data);
        $this.setState({
          ctcModal: !$this.state.ctcModal
        });
      })
      .catch(function(error) {
        $this.setState({
          ctcModal: !$this.state.ctcModal
        });
      });
  }

  converToClient() {
    if (this.selectedLeads.length === 1) {
      this.toggleCtcModal();
      this.currentLead = this.props.getLead(this.selectedLeads[0]);
    } else {
      alert("Please Select One To Convert");
    }
  }

  initfields() {
    let fieldState = new LeadFields();
    for (let field in fieldState) {
      fieldState[field].value = this.currentLead[field];
    }
    return fieldState;
  }

  renderListRow(lead) {
    return (
      <LeadRow
        match={this.props.match}
        lead={lead}
        key={lead.id}
        handleListCheckboxChange={this.handleListCheckboxChange}
      />
    );
  }

  render() {
    const column = ["Lead Name", "Country", "Channel", "Date", "Status"];
    const columnForSorting = ["Name", "Country", "Channel", "Date"];
    return (
      <Fragment>
        <ContentListing
          listRow={this.renderListRow}
          listColumn={column}
          Owner="Leads"
          toggle={this.toggle}
          list={this.props.leads}
          updateContent={this.props.updateAllLeads}
          converToClient={this.converToClient}
          columnForSorting={columnForSorting}
        />
        <HocForm
          toggle={this.toggle}
          modal={this.state.modal}
          formFields={LeadFields}
          FormView={LeadForm}
          submitCall={this.addLeadCall}
          isChannel={true}
        />
        {this.state.ctcModal ? (
          <HocForm
            toggle={this.toggleCtcModal}
            modal={this.state.ctcModal}
            formFields={this.initfields()}
            FormView={LeadForm}
            submitCall={this.convertToClientCall}
            isFilled={true}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default LeadListing;
