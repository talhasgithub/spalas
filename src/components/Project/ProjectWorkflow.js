import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import BriefTab from "./BriefTab";
import WorkflowTab from "./WorkflowTab";
import StoryTab from "./StoryTab";
import ResourceTab from "./ResourceTab";
import VideoTab from "./VideoTab";
import ReleaseTab from "./ReleaseTab";
import ProjectWorkflowEdit from "./ProjectWorkflowEdit";

class ProjectWorkflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: <WorkflowTab />
    };
    console.log(this.props.project);
  }

  changeTab(selectedTab, event) {
    event.preventDefault();
    let $this = this;
    let tab = {
      Workflow: function() {
        $this.setState({
          currentTab: <WorkflowTab />
        });
      },
      STORY: function() {
        $this.setState({
          currentTab: <StoryTab />
        });
      },
      BRIEF: function() {
        $this.setState({
          currentTab: <BriefTab />
        });
      },
      RESOURCE: function() {
        $this.setState({
          currentTab: <ResourceTab />
        });
      },
      VIDEO: function() {
        $this.setState({
          currentTab: <VideoTab />
        });
      },
      RELEASE: function() {
        $this.setState({
          currentTab: <ReleaseTab />
        });
      }
    };
    return (tab[selectedTab] || tab["Workflow"])();
  }

  render() {
    return (
      <div className="section__content section__content--p15">
        <div className="row bg-white project-overflow-detail">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <label>Subject</label>
            <span>
              {/* <div className="table-avatar avatar-lg">
                <div className="circle-text-sm">Project Initials</div>
              </div> */}
              {this.props.project.subject}
            </span>
            <label>Project ID</label>
            <span>{this.props.project.id}</span>
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
              field={this.props.project.gender.replace(/\b\w/g, l =>
                l.toUpperCase()
              )}
              project={this.props.project}
              updateProject={this.props.updateProject}
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
              field={this.props.project.date_of_birth}
              project={this.props.project}
              updateProject={this.props.updateProject}
              fieldName={"date_of_birth"}
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
              field={this.props.project.deadline}
              project={this.props.project}
              updateProject={this.props.updateProject}
              fieldName={"deadline"}
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
              <li className="nav-item">
                <a
                  id="workflow-tab"
                  className="nav-link  active show"
                  role="tab"
                  href="#"
                  data-toggle="pill"
                  aria-selected="true"
                  onClick={this.changeTab.bind(this, "WORKFLOW")}
                >
                  WorkFlow
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="story-tab"
                  className="nav-link"
                  role="tab"
                  href="#"
                  data-toggle="pill"
                  aria-selected="false"
                  onClick={this.changeTab.bind(this, "STORY")}
                >
                  Story
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="brief-tab"
                  className="nav-link"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-selected="false"
                  onClick={this.changeTab.bind(this, "BRIEF")}
                >
                  Brief
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="resource-tab"
                  className="nav-link"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-selected="false"
                  onClick={this.changeTab.bind(this, "RESOURCE")}
                >
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="video-tab"
                  className="nav-link"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-selected="false"
                  onClick={this.changeTab.bind(this, "VIDEO")}
                >
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="release-tab"
                  className="nav-link"
                  data-toggle="pill"
                  href="#"
                  role="tab"
                  aria-selected="false"
                  onClick={this.changeTab.bind(this, "RELEASE")}
                >
                  Release
                </a>
              </li>
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
export default ProjectWorkflow;
