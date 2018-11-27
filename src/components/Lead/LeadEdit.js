import React, { Component } from "react";
import LeadDetail from "./LeadDetail";
import Workflow from "./Workflow";
export default class LeadEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: true
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.currentView = this.currentView.bind(this);
  }
  handleViewChange() {
    this.setState({
      currentTab: !this.state.currentTab
    });
  }
  currentView() {
    return this.state.currentTab ? (
      <LeadDetail
        match={this.props.match}
        lead={this.props.lead}
        updateLead={this.props.updateLead}
      />
    ) : (
      <Workflow />
    );
  }
  render() {
    console.log("Hello World");
    console.log(this.props.match.params);
    return (
      <div className="section__content section__content--p15">
        <div className="row top-tab-bar">
          <div className="col-md-12 box-wrapper bg-white">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-toggle="pill"
                  role="tab"
                  aria-selected="true"
                  onClick={this.handleViewChange}
                >
                  Lead Detail
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  role="tab"
                  aria-selected="false"
                  onClick={this.handleViewChange}
                >
                  WorkFlow
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.currentView()}
      </div>
    );
  }
}
