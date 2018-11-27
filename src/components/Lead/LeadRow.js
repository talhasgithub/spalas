import React from "react";
import { Link } from "react-router-dom";
import ListRadioButton from "../Shared/ListRadioButton";

const renderStatus = status => {
  if (status === "active") {
    return (
      <button
        type="button"
        className="btn btn-outline-success btn-sm btn-status"
      >
        <i className="circle" />
        &nbsp; Active
      </button>
    );
  } else if (status === "extracted") {
    return (
      <button
        type="button"
        className="btn btn-outline-success btn-sm btn-status"
      >
        <i className="circle" />
        &nbsp; Extracted
      </button>
    );
  } else if (status == "new") {
    return (
      <button
        type="button"
        className="btn btn-outline-success btn-sm btn-status"
      >
        <i className="circle" />
        &nbsp; New
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className="btn btn-outline-success btn-sm btn-status"
      >
        <i className="circle" />
        &nbsp; Active
      </button>
    );
  }
};
const LeadRow = props => {
  const { lead } = props;
  console.log(lead);
  return (
    <tr>
      <td colSpan="2">
        <ListRadioButton
          name="lead"
          handleListCheckboxChange={props.handleListCheckboxChange}
          leadId={lead.id}
        />
        <Link to={`${props.match.url}/${lead.id}/leadedit`}>
          <div className="table-avatar avatar-lg">
            <img src={require("../../images/avatar-01.jpg")} alt="#" />
          </div>
          <span className="table-avatar-title avatar-title-lg">
            {lead.first_name}
          </span>
        </Link>
      </td>
      <td>{lead.country}</td>
      <td>{lead.channel}</td>
      <td>{lead.created_at}</td>
      <td>{renderStatus(lead.status)}</td>
    </tr>
  );
};
export default LeadRow;
