import React, { Component } from "react";

import HocForm from "../Shared/HocForm";
import { ProjectFields } from "../../Utilities/FormsModel";
import ProjectForm from "./ProjectForm";
import ListingTable from "../Shared/ListingTable";
import ProjectSmallRow from "./ProjectSmallRow";

export default class ClientProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      projects: []
    };
    this.toggle = this.toggle.bind(this);
    this.addProjectCall = this.addProjectCall.bind(this);
    this.fetchSubscription = this.fetchSubscription.bind(this);
    this.showModal = this.showModal.bind(this);
    this.renderProjectSmallRow = this.renderProjectSmallRow.bind(this);
    this.renderProjectForm = this.renderProjectForm.bind(this);
    this.subscriptions = [];
  }

  componentDidMount() {
    this.fetchSubscription();
    this.fetchProjects();
  }

  toggle() {
    const $this = this;
    this.fetchSubscription()
      .then(function(response) {
        console.log(response);
        $this.subscriptions = response.data.data;
        $this.setState({
          modal: !$this.state.modal
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  fetchProjects() {
    const $this = this;
    this.props
      .authAxios({
        method: "get",
        url: `/api/v1/clients/${this.props.client.id}/client_projects`,
        data: {},
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(function(response) {
        console.log(response);
        $this.setState({
          projects: response.data.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  showModal() {
    if (this.state.modal) {
      console.log(this.subscriptions);
      return (
        <HocForm
          toggle={this.toggle}
          modal={this.state.modal}
          formFields={ProjectFields}
          FormView={this.renderProjectForm}
          isFilled={false}
          submitCall={this.addProjectCall}
        />
      );
    }
  }

  fetchSubscription() {
    let $this = this;
    return this.props.authAxios({
      method: "get",
      url: `/api/v1/clients/${this.props.client.id}/client_subscriptions`,
      data: {},
      headers: { "Access-Control-Allow-Origin": "*" }
    });
  }

  addProjectToState(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  addProjectCall(formData) {
    this.toggle();
    formData.user_id = this.props.client.id;
    this.props
      .authAxios({
        method: "post",
        url: `/api/v1/projects`,
        data: {
          project: formData
        },
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(
        function(response) {
          console.log(response);
          this.addProjectToState(response.data.data);
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  renderProjectSmallRow(props) {
    return (
      <ProjectSmallRow
        {...props}
        match={this.props.match}
        key={this.props.client.id + props.subject}
      />
    );
  }

  renderProjectForm(props) {
    return <ProjectForm {...props} subscriptions={this.subscriptions} />;
  }

  render() {
    const listColumn = ["Project ID", "Subject", "Stage"];
    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="heading-with-wrapper heading-button">
            <i className="fa fa-circle-o" />
            Projects
            <button
              className="au-btn au-btn-icon au-btn--pink btn-lg"
              data-toggle="modal"
              data-target="#modal_project"
              onClick={this.toggle}
            >
              <i
                className="fa fa-plus"
                style={{ fontSize: 15, color: "white" }}
              />
              Add
            </button>
          </h3>
          <ListingTable
            isCheckBox={true}
            listColumn={listColumn}
            list={this.state.projects}
            listRow={this.renderProjectSmallRow}
          />
        </div>
        {this.showModal()}
      </div>
    );
  }
}
