import React from "react";
import { Link } from "react-router-dom";
const ClientRow = props => {
  const { client } = props;
  return (
    <tr>
      <td colSpan="2">
        <label className="au-checkbox">
          <input type="checkbox" />
          <span className="au-checkmark" />
        </label>
        <Link to={`${props.match.url}/${client.id}/clientedit`}>
          <div className="table-avatar avatar-lg">
            <img
              src={require("../../images/avatar-01.jpg")}
              alt="Terry Crowley"
            />
          </div>
          <span className="table-avatar-title avatar-title-lg">
            {client.first_name}
            {client.surname}
          </span>
        </Link>
      </td>
      <td>{client.address_line_one}</td>
      <td>{client.address_line_two}</td>
      <td>{client.country}</td>
      <td>{client.email}</td>
    </tr>
  );
};
export default ClientRow;
