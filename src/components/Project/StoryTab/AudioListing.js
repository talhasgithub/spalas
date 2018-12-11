import React, { Component, Fragment } from "react";

import ListingTable from "../../Shared/ListingTable";
import AudioRow from "./AudioRow";

class AudioListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioList: [1]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}
  handleChange(e) {
    this.props.fileController.getFileToSend(e.target.files[0]);
  }
  renderRow(content) {
    return <AudioRow content={content} key={content + "audio-row"} />;
  }
  render() {
    const listColumn = ["FILE NAME", "DATE ADDED", "CONTROLS", "ACTION", ""];
    return (
      <Fragment>
        <h3 className="heading-with-wrapper heading-button bar-with-button">
          <i className="fa fa-circle-o" />
          Audio Interview
          <button
            id="audio-upload-button"
            className="au-btn au-btn-icon au-btn--pink btn-sm"
            style={{ height: 40 }}
          >
            <label htmlFor="filer" style={{ cursor: "pointer" }}>
              <i className="fa fa-upload" />
              Upload
            </label>
          </button>
          <input id="filer" type="file" onChange={this.handleChange} hidden />
        </h3>
        <div className="box-wrapper bg-white">
          <ListingTable
            isCheckBox={true}
            listColumn={listColumn}
            list={this.state.audioList}
            listRow={this.renderRow}
          />
          {/* <div className="">
              <div className="table-data__tool table-top-pagination-bar">
                <div className="table-data__tool-left">
                  <span className="table-top-pagination-bar-txt">Showing</span>
                  <div className="rs-select2--light rs-select2--md">
                    <select
                      className="js-select2 per-page-select"
                      name="property"
                    >
                      <option value="">Pick</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                    <div className="dropDownSelect2" />
                  </div>
                  <span className="table-top-pagination-bar-txt">
                    out of <span id="page-out-of">0</span> Audio Files
                  </span>
                  <div className="data-table-top-pagination-button">
                    <button className="arrow-pagi page-previous">
                      <i className="fa fa-angle-left" />
                    </button>
                    <button className="arrow-pagi page-next">
                      <i className="fa fa-angle-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </Fragment>
    );
  }
}

export default AudioListing;
