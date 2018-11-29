import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import ClientEdit from "./ClientEdit";
import ClientListing from "./ClientListing";

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      subscriptions: []
    };
    this.updateClients = this.updateClients.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.updateAllClients = this.updateAllClients.bind(this);
    this.getClient = this.getClient.bind(this);
    this.renderToClientListing = this.renderToClientListing.bind(this);
    this.renderToClientEdit = this.renderToClientEdit.bind(this);
  }

  componentDidMount() {
    console.log("Hello Did Mount");
    let $this = this;
    axios({
      method: "get",
      url: "/api/v1/clients"
    }).then(function(response) {
      $this.setState({
        clients: response.data.data.clients,
        subscriptions: response.data.data.subscriptions
      });
    });
  }

  updateClients(client) {
    let clients = this.state.clients;
    clients.push(client);
    this.setState({
      clients: clients
    });
  }

  updateClient(client) {
    let currentClient = client;
    let clients = this.state.clients;
    clients.map((client, index) => {
      if (client.id == currentClient.id) {
        clients[index] = currentClient;
        this.setState({
          clients: clients
        });
      }
    });
  }

  updateAllClients(clients) {
    console.log(clients);
    this.setState({
      clients: clients.clients
    });
  }

  getClient(id) {
    let currentClient;
    this.state.clients.map(function(client) {
      if (client.id == id) {
        currentClient = client;
      }
    });
    return currentClient;
  }

  renderToClientListing() {
    return (
      <ClientListing
        match={this.props.match}
        clients={this.state.clients}
        updateClients={this.updateClients}
        updateContent={this.updateAllClients}
      />
    );
  }

  renderToClientEdit(props) {
    return (
      <ClientEdit
        {...props}
        content={this.getClient(props.match.params.id)}
        updateClient={this.updateClient}
        subscriptions={this.state.subscriptions}
        contentType="client"
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
          component={this.renderToClientListing}
        />
        <Route
          path={`${match.path}/:id/clientedit`}
          component={this.renderToClientEdit}
        />
      </Fragment>
    );
  }
}
export default Client;
