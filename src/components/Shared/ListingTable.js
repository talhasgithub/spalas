import React from "react";

const ListingTable = props => {
  const { isCheckBox, listColumn, list, listRow } = props;
  let firstColumn = listColumn[0];
  listColumn.splice(0, 1);
  console.log(list);
  return (
    <div className="table-responsive box-wrapper">
      <table className="table table-data2 row-check-2 table-col-last-padding-20 ">
        <thead>
          <tr>
            {isCheckBox ? (
              <th colSpan="1">
                <label className="au-checkbox" hidden>
                  <input type="checkbox" />
                  <span className="au-checkmark parent-checkmark" />
                </label>
                <span className="parent-check-title">{firstColumn}</span>
              </th>
            ) : (
              <th colSpan="2">
                <label className="au-checkbox">
                  <input type="checkbox" />
                  <span className="au-checkmark parent-checkmark" />
                </label>
                <span className="parent-check-title">{firstColumn}</span>
              </th>
            )}

            {listColumn.map(function(column, index) {
              return <th key={index}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {list.map(function(content) {
            console.log(content);
            return listRow(content);
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListingTable;
