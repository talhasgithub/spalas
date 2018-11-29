import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import ClientEditForm from "./ClientEditForm";
import HocForm from "../Shared/HocForm";
import { ClientFields } from "../../Utilities/FormsModel";
import ClientSubscription from "../Subscription/ClientSubscription";
import ClientProject from "../Project/ClientProject";
import UnResolvedRoute from "../Shared/ContentNotFound";
class ClientEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      newSubscriptionAddes: false
    };
    this.initFields = this.initFields.bind(this);
    this.editClientCall = this.editClientCall.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
  }

  triggerRerender() {
    this.setState({
      newSubscriptionAddes: !this.state.newSubscriptionAddes
    });
  }

  makeEditable() {
    this.setState({
      isEditable: !this.state.isEditable
    });
  }

  initFields() {
    let fieldState = new ClientFields();

    for (let field in fieldState) {
      fieldState[field].value = this.props.content[field];
    }
    return fieldState;
  }

  editClientCall(formData) {
    this.makeEditable();
    console.log(formData);
    let $this = this;
    axios({
      method: "put",
      url: `/api/v1/clients/${this.props.content.id}`,
      data: {
        user: formData
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
        $this.props.updateClient(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="section__content section__content--p15">
        <div className="container-fluid">
          <div className="row padding-top-15">
            <div className="col-md-12">
              <div className="client-profile-wrapper box-wrapper">
                <HocForm
                  FormView={props => {
                    return (
                      <ClientEditForm
                        {...props}
                        makeEditable={this.makeEditable}
                        isEditable={this.state.isEditable}
                      />
                    );
                  }}
                  formFields={this.initFields()}
                  submitCall={this.editClientCall}
                  isFilled={true}
                />
                <div className="client-map">
                  <div id="map">
                    <img src="images/map.png" alt="Life & Story" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ClientSubscription
            client={this.props.content}
            subscriptions={this.props.subscriptions}
          />

          <ClientProject client={this.props.content} match={this.props.match} />

          <div className="row">
            <div className="col-md-12">
              <h3 className="heading-with-wrapper heading-button">
                <i className="fa fa-circle-o" />
                Payments
                <button
                  className="au-btn au-btn-icon au-btn--pink btn-lg"
                  data-toggle="modal"
                  data-target="#modal_payment"
                >
                  <i className="zmdi zmdi-plus" />
                  Add{" "}
                </button>
              </h3>
              <div className="table-responsive box-wrapper">
                <table className="table table-data2">
                  <thead>
                    <tr>
                      <th>Payment id</th>
                      <th>Date</th>
                      <th>Supscription Id</th>
                      <th>Subject</th>
                      <th>Amount</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>546433</td>
                      <td>15 Aug 18</td>
                      <td>656546</td>
                      <td>John Simth</td>
                      <td>$225</td>
                      <td>Production</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="heading-with-wrapper heading-button">
                <i className="fa fa-circle-o" />
                Tasks
              </h3>
              <div className="table-responsive box-wrapper">
                <table className="table table-data2">
                  <thead>
                    <tr>
                      <th>Task id</th>
                      <th>Project Id</th>
                      <th>Subject</th>
                      <th>User</th>
                      <th>Description</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2564</td>
                      <td>54353</td>
                      <td>John Simth</td>
                      <td>
                        <div className="table-avatar">
                          <img
                            src={require("../../images/avatar-01.jpg")}
                            alt="Terry Crowley"
                          />{" "}
                        </div>
                        <span className="table-avatar-title">John Simth</span>
                      </td>
                      <td>Nam eu est non augue dapibus molestie eu vel ex.</td>
                      <td>15 Aug 18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h3 className="heading-with-wrapper heading-button">
                <i className="fa fa-circle-o" />
                Activity
              </h3>
              <div className="table-responsive box-wrapper">
                <table className="table table-data2">
                  <thead>
                    <tr>
                      <th>Activity Id</th>
                      <th>Type</th>
                      <th>Item</th>
                      <th>User</th>
                      <th>Project</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6533</td>
                      <td>File Upload</td>
                      <td>John Simth</td>
                      <td>
                        <div className="table-avatar">
                          <img
                            src={require("../../images/avatar-01.jpg")}
                            alt="Terry Crowley"
                          />{" "}
                        </div>
                        <span className="table-avatar-title">John Simth</span>
                      </td>
                      <td>Mary's Birthday</td>
                      <td>15 Aug 18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UnResolvedRoute(ClientEdit);
