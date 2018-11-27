import React, { Component } from "react";
import axios from "axios";

import { SubscriptionFields } from "../../Utilities/FormsModel";
import SubcriptionForm from "./SubcriptionForm";

export default class ClientSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.addSubscriptionCall = this.addSubscriptionCall.bind(this);
    this.onPackageChange = this.onPackageChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  addSubscriptionCall(formData) {
    this.toggle();
    delete formData["package"];
    axios({
      method: "post",
      url: `/api/v1/clients/${this.props.client.id}/create_subscription`,
      data: {
        client_subscription: formData
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onPackageChange(packageSubscriptionId) {
    console.log(packageSubscriptionId);
    let currentSubscription;
    if (this.props.subscriptions) {
      this.props.subscriptions.map((subs, index) => {
        if (subs.id == packageSubscriptionId) {
          console.log(subs);
          currentSubscription = new SubscriptionFields(
            subs.id,
            subs.name,
            subs.description,
            subs.start_date
          );
        }
      });
    }
    return currentSubscription || null;
  }

  render() {
    const formFields = new SubscriptionFields();
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="heading-with-wrapper  border-heading-bottom heading-button">
            <i className="fa fa-circle-o" />
            Subscription
            <button
              className="au-btn au-btn-icon au-btn--pink btn-lg"
              data-toggle="modal"
              data-target="#model_subscription"
              onClick={this.toggle}
            >
              <i className="zmdi zmdi-plus" />
              Add
            </button>
          </h3>
          <div className="box-wrapper bg-white padding-all-25">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="subscription-box sup-box-hover sup-pink-box"
                  data-item="pink"
                >
                  <div className="subscription-tick">
                    <i className="fos tick-circle" />
                  </div>
                  <h5>Basic</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <ul>
                        <li>3 Video Styles</li>
                        <li>Story Writing</li>
                        <li>Production</li>
                        <li>Designing</li>
                      </ul>
                    </div>
                    <div className="col-md-5">
                      <span className="subscription-box-right">
                        <label>Subscription ID</label>
                        788647
                      </span>
                      <span className="subscription-box-right">
                        <label>Start Date</label>
                        08/07/2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="subscription-box sup-box-hover sup-yellow-box"
                  data-item="yellow"
                >
                  <div className="subscription-tick">
                    <i className="fos tick-circle" />
                  </div>
                  <h5>Basic</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <ul>
                        <li>3 Video Styles</li>
                        <li>Story Writing</li>
                        <li>Production</li>
                        <li>Designing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="subscription-box sup-box-hover sup-green-box"
                  data-item="green"
                >
                  <div className="subscription-tick">
                    <i className="fos tick-circle" />
                  </div>
                  <h5>Basic</h5>
                  <div className="row">
                    <div className="col-md-7">
                      <ul>
                        <li>3 Video Styles</li>
                        <li>Story Writing</li>
                        <li>Production</li>
                        <li>Designing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubcriptionForm
          subscriptions={this.props.subscriptions}
          onPackageChange={this.onPackageChange}
          toggle={this.toggle}
          modal={this.state.modal}
          formFields={formFields}
          submitCall={this.addSubscriptionCall}
        />
      </div>
    );
  }
}
