import React, { Component, Fragment } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import ProjectListing from "./ProjectListing";
import ProjectWorkflow from "./ProjectWorkflow";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    this.fecthProjects = this.fecthProjects.bind(this);
    this.populateProjects = this.populateProjects.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.updateProjects = this.updateProjects.bind(this);
    this.renderToProjectListing = this.renderToProjectListing.bind(this);
  }

  componentDidMount() {
    this.fecthProjects();
  }

  populateProjects(projects) {
    console.log(projects);
    this.setState({
      projects: projects.data.data
    });
  }

  updateProjects(projects) {
    console.log(projects);
    this.setState({
      projects: projects
    });
  }

  fecthProjects() {
    axios({
      method: "get",
      url: "/api/v1/projects"
    }).then(this.populateProjects);
  }

  updateProject(project) {
    console.log(project);
    let currentProject = project;
    let projects = this.state.projects;
    projects.map((project, index) => {
      if (project.id == currentProject.id) {
        projects[index] = currentProject;
        this.setState({
          projects: projects
        });
      }
    });
  }

  getProject(id) {
    let currentProject;
    this.state.projects.map(function(project) {
      if (project.id == id) {
        currentProject = project;
      }
    });
    return currentProject;
  }

  renderToProjectListing() {
    return (
      <ProjectListing
        projects={this.state.projects}
        match={this.props.match}
        updateContent={this.updateProjects}
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
          component={this.renderToProjectListing}
        />
        <Route
          path={`${match.path}/:id/projectworkflow`}
          component={props => {
            return (
              <ProjectWorkflow
                {...props}
                content={this.getProject(props.match.params.id)}
                updateProject={this.updateProject}
                contentType="project"
              />
            );
          }}
        />
      </Fragment>
    );
  }
}
export default Project;
