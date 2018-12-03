import React, { Component, Fragment } from "react";

import ClientRow from "./ClientRow";
import ContentListing from "../Shared/ContentListing";
import HocForm from "../Shared/HocForm";
import LeadForm from "../Lead/LeadForm";
import { ClientFields } from "../../Utilities/FormsModel";

class ClientListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.addClientCall = this.addClientCall.bind(this);
  }

  toggle() {
    console.log("i am click");
    this.setState({
      modal: !this.state.modal
    });
  }

  addClientCall(formData) {
    let $this = this;
    this.toggle();

    this.props
      .authAxios({
        method: "post",
        url: "/api/v1/clients",
        data: {
          user: formData
        },
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function(response) {
        console.log(response);
        $this.props.updateClients(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.clients.clients);
    const column = ["Name", "Address 1", "Address 2", "Country", "Email"];
    const columnForSorting = ["Name", "Country", "Channel", "Date"];
    return (
      <Fragment>
        <ContentListing
          listRow={client => {
            return (
              <ClientRow
                match={this.props.match}
                client={client}
                key={client.id}
              />
            );
          }}
          listColumn={column}
          Owner="Clients"
          toggle={this.toggle}
          list={this.props.clients}
          updateContent={this.props.updateContent}
          columnForSorting={columnForSorting}
        />
        <HocForm
          toggle={this.toggle}
          modal={this.state.modal}
          formFields={ClientFields}
          FormView={LeadForm}
          submitCall={this.addClientCall}
          isChannel={false}
          isFilled={false}
        />
      </Fragment>
    );
  }
}
export default ClientListing;
