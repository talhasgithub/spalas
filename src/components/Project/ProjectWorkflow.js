import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";

import BriefTab from "./BriefTab";
import WorkflowTab from "./WorkflowTab";
import StoryTab from "./StoryTab";
import ResourceTab from "./ResourceTab";
import VideoTab from "./VideoTab";
import ReleaseTab from "./ReleaseTab";
import ProjectWorkflowEdit from "./ProjectWorkflowEdit";
import UnResolvedRoute from "../Shared/ContentNotFound";

const TABS = [
  {
    name: "WORKFLOW",
    active: true,
    component: <WorkflowTab />
  },
  {
    name: "STORY",
    active: false,
    component: <StoryTab />
  },
  {
    name: "BRIEF",
    active: false,
    component: <BriefTab />
  },
  {
    name: "RESOURCES",
    active: false,
    component: <ResourceTab />
  },
  {
    name: "VIDEO",
    active: false,
    component: <VideoTab />
  },
  {
    name: "RELEASE",
    active: false,
    component: <ReleaseTab />
  }
];

const TabComponent = props => {
  return (
    <li className="nav-item">
      <button onClick={props.handleClick}>
        <span
          id="workflow-tab"
          className={`nav-link ${props.active ? "active" : ""}`}
          role="tab"
          data-toggle="pill"
          aria-selected="true"
        >
          {props.name}
        </span>
      </button>
    </li>
  );
};

class ProjectWorkflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: <WorkflowTab />
    };
    this.tabs = TABS;
    this.generateTabs = this.generateTabs.bind(this);
  }

  handleClickTab(id, event) {
    event.preventDefault();
    this.tabs.map((tab, index) => {
      if (index == id) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    this.setState({
      currentTab: this.tabs[id].component
    });
  }

  generateTabs(tab, index) {
    return (
      <TabComponent
        name={tab.name}
        active={tab.active}
        handleClick={this.handleClickTab.bind(this, index)}
      />
    );
  }

  render() {
    if (!this.props.content) {
      return <Redirect to="/home/lead" />;
    }

    return (
      <div className="section__content section__content--p15">
        <div className="row bg-white project-overflow-detail">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Subject</label>
            <span>
              {/* <div className="table-avatar avatar-lg">
                <div className="circle-text-sm">Project Initials</div>
              </div> */}
              {this.props.content.subject}
            </span>
            <label>Project ID</label>
            <span>{this.props.content.id}</span>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Client</label>
            <span>FirstName</span>
            <label>Partner</label>
            <span>StudioX Pro</span>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Gender</label>
            <ProjectWorkflowEdit
              field={this.props.content.gender.replace(/\b\w/g, l =>
                l.toUpperCase()
              )}
              project={this.props.content}
              updateProject={this.props.updateProject}
              authAxios={this.props.authAxios}
              render={handleOnChange => {
                return (
                  <select
                    id="gender-input-field"
                    className="form-control"
                    onChange={handleOnChange}
                    name="gender"
                  >
                    <option value="0">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                );
              }}
            />
            <label>Date of Birth</label>
            <ProjectWorkflowEdit
              field={this.props.content.date_of_birth}
              project={this.props.content}
              updateProject={this.props.updateProject}
              fieldName={"date_of_birth"}
              authAxios={this.props.authAxios}
              render={(handleOnChange, selected) => {
                return (
                  <DatePicker
                    selected={selected}
                    onChange={handleOnChange}
                    placeholderText="Select DeadLine"
                  />
                );
              }}
            />
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Date Created</label>
            <span>Date</span>
            <label>DeadLine</label>
            <ProjectWorkflowEdit
              field={this.props.content.deadline}
              project={this.props.content}
              updateProject={this.props.updateProject}
              fieldName={"deadline"}
              authAxios={this.props.authAxios}
              render={(handleOnChange, selected) => {
                console.log(selected);
                return (
                  <DatePicker
                    selected={selected}
                    onChange={handleOnChange}
                    placeholderText="Select Date Of Birth"
                    minDate={new Date()}
                  />
                );
              }}
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Stage</label>
            <span>Onboarding</span>
            <label>Timesheet</label>
            <span>5:23 Hrs</span>
          </div>
        </div>

        <div className="row top-tab-bar top-tab-bar-sub">
          <div className="col-md-12 box-wrapper bg-white shade-inside">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {this.tabs.map(this.generateTabs)}
            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content" id="myTabContent">
                {this.state.currentTab}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UnResolvedRoute(ProjectWorkflow);
