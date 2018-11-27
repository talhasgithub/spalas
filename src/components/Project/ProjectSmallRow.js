import React from "react";
import { Link } from "react-router-dom";
const ProjectSmallRow = props => {
  const { id, subject, stage, match } = props;
  return (
    <tr key={id + subject}>
      <td>{id}</td>
      <td>
        <Link to={`${match.url}/projectworkflow`}>
          <span style={{ color: "#A2A2A2" }}>{subject}</span>
        </Link>
      </td>
      <td>{stage}</td>
    </tr>
  );
};
export default ProjectSmallRow;
