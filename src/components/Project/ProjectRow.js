import React from "react";
import { Link } from "react-router-dom";
const ProjectRow = props => {
  const { project } = props;
  return (
    <tr>
      <td>
        <Link to={`${props.match.url}/${project.id}/projectworkflow`}>
          <div className="table-avatar avatar-lg">
            <img
              src={require("../../images/avatar-01.jpg")}
              alt="Terry Crowley"
            />
          </div>
          <span className="table-avatar-title avatar-title-lg">
            {project.subject}
          </span>
        </Link>
      </td>
      <td>
        Phil Talbot
        <i className="user-relation">{project.relationship_to_client}</i>
      </td>
      <td>UK Studio</td>
      <td>USA</td>
      <td />
      <td>{project.status}</td>
    </tr>
  );
};
export default ProjectRow;
