import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import LeadListing from "./LeadListing";
import LeadEdit from "./LeadEdit";
import MakeContextConsumer from "../Auth/MakeContextConsumer";

class Lead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: []
    };
    this.updateLeads = this.updateLeads.bind(this);
    this.updateLead = this.updateLead.bind(this);
    this.getLead = this.getLead.bind(this);
    this.updateAllLeads = this.updateAllLeads.bind(this);
    this.routeToLeadEdit = this.routeToLeadEdit.bind(this);
    this.routeToLeadListing = this.routeToLeadListing.bind(this);
  }

  componentDidMount() {
    let $this = this;
    console.log(this.props);
    this.props
      .authAxios({
        method: "get",
        url: "/api/v1/leads"
      })
      .then(function(response) {
        $this.setState({
          leads: response.data.data
        });
      });
  }

  updateLeads(lead) {
    let leads = this.state.leads;
    leads.push(lead);
    this.setState({
      leads: leads
    });
  }

  updateAllLeads(leads) {
    this.setState({
      leads: leads
    });
  }

  updateLead(lead) {
    console.log(lead);
    let currentLead = lead;
    let leads = this.state.leads;
    leads.map((lead, index) => {
      if (lead.id == currentLead.id) {
        leads[index] = currentLead;
        this.setState({
          leads: leads
        });
      }
    });
  }

  getLead(id) {
    let currentLead;
    this.state.leads.map(function(lead) {
      if (lead.id == id) {
        currentLead = lead;
      }
    });
    return currentLead;
  }

  routeToLeadEdit(props) {
    return (
      <LeadEdit
        {...props}
        content={this.getLead(props.match.params.id)}
        updateLead={this.updateLead}
        contentType="lead"
        authAxios={this.props.authAxios}
      />
    );
  }

  routeToLeadListing(props) {
    return (
      <LeadListing
        match={this.props.match}
        leads={this.state.leads}
        updateLeads={this.updateLeads}
        updateLead={this.updateLead}
        updateAllLeads={this.updateAllLeads}
        getLead={this.getLead}
        authAxios={this.props.authAxios}
      />
    );
  }

  render() {
    const { match } = this.props;
    return (
      <Fragment>
        <Route
          path={`${match.path}`}
          exact
          component={this.routeToLeadListing}
        />
        <Route
          path={`${match.path}/:id/leadedit`}
          exact
          component={this.routeToLeadEdit}
        />
        {() => console.log("caller")}
      </Fragment>
    );
  }
}
export default MakeContextConsumer(Lead);
