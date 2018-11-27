import React, { Component, Fragment } from "react";
import ProjectRow from "./ProjectRow";
import ContentListing from "../Shared/ContentListing";

class ProjectListing extends Component {
  render() {
    let column = ["Subject", "Client", "Partner", "Country", "Date", "Status"];
    let columnForSorting = [
      "Subject",
      "Client",
      "Partner",
      "Dob",
      "Status",
      "Date"
    ];
    return (
      <Fragment>
        <ContentListing
          listRow={project => {
            return (
              <ProjectRow
                match={this.props.match}
                project={project}
                key={project.id}
              />
            );
          }}
          listColumn={column}
          Owner="Projects"
          list={this.props.projects}
          updateContent={this.props.updateContent}
          isCheckBox={true}
          columnForSorting={columnForSorting}
        />
      </Fragment>
    );
  }
}
export default ProjectListing;
