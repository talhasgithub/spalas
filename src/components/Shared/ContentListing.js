import React from "react";
import SearchListForm from "./SearchList";
import ListUtilityBar from "./ListUtilityBar";
import ListingTable from "../Shared/ListingTable";
const ContentListing = props => {
  const { toggle, Owner, listColumn, list, isCheckBox, listRow } = props;
  return (
    <div className="section__content section__content--p15">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="overview-wrap wrapper-title">
              <h3>{Owner}</h3>
              <SearchListForm
                owner={Owner.toLowerCase()}
                updateContent={props.updateContent}
              />
              <button
                className="au-btn au-btn-icon au-btn--pink btn-lg"
                data-toggle="modal"
                data-target="#largeModal"
                onClick={toggle}
              >
                <i className="fa fa-plus" />
                Add New {Owner}
              </button>
            </div>
          </div>
        </div>
        <div className="row row-wrapper">
          <div className="col-md-12">
            <ListUtilityBar
              owner={Owner.toLowerCase()}
              updateContent={props.updateContent}
              converToClient={props.converToClient}
              columnForSorting={props.columnForSorting}
            />
            <ListingTable
              isCheckBox={isCheckBox}
              listColumn={listColumn}
              list={list}
              listRow={listRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentListing;
