import React, { Component } from "react";
export default class StoryTab extends Component {
  render() {
    return (
      <div>
        <div className="tab-pane " id="story" role="tab">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Story</h3>
            <span className="expand-button">
              Expand
              <i className="fa fa-caret-up" />
            </span>
          </div>
          <h3 className="heading-with-wrapper heading-button bar-with-button">
            <i className="fa fa-circle-o" />
            Audio Interview
            <button
              id="audio-upload-button"
              className="au-btn au-btn-icon au-btn--pink btn-lg"
              data-toggle="modal"
              data-target="#modal_upload"
            >
              <i className="fa fa-upload" />
              Upload
            </button>
            <form>
              <label htmlFor="file">File to Upload</label>
              <input type="text" />
            </form>
          </h3>
          <div className="box-wrapper bg-white">
            <div id="waveform" />
            <div
              className="table-responsive box-wrapper show-expand-box"
              style={{ display: "block", overflow: "visible" }}
            >
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Date Added</th>
                    <th>Controls</th>
                    <th />
                    <th />
                    <th className="txt-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="30%" className="tbl-title-lg">
                      <i className="fos-icon audio-file-icon" />
                      Name
                    </td>
                    <td width="10%">
                      <span>12-16-2018</span>
                    </td>
                    <td width="15%">
                      <div className="control-box">
                        <button className="audio-play mx-2">
                          <i
                            className="fa fa-play"
                            style={{ color: "darkgrey" }}
                          />
                        </button>
                        <button className="audio-pause mx-2">
                          <i
                            className="fa fa-pause"
                            style={{ color: "darkgrey" }}
                          />
                        </button>
                        <button className="audio-stop mx-2">
                          <i
                            className="fa fa-stop"
                            style={{ color: "darkgrey" }}
                          />
                        </button>
                      </div>
                    </td>
                    <td colSpan="2">
                      <div className="waveform" />
                    </td>
                    <td width="10%" className="txt-center">
                      <i className="fos archive-icon float-none" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="">
                <div className="table-data__tool table-top-pagination-bar">
                  <div className="table-data__tool-left">
                    <span className="table-top-pagination-bar-txt">
                      Showing
                    </span>
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
              </div>
            </div>
          </div>
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Timeline</h3>
          </div>
          <div className="default-tab">
            <nav>
              <div
                className="nav nav-tabs"
                id="nav-tab"
                role="tablist"
                data-info="<%= @time_line.to_json %>"
                data-slick='{"slidesToShow": 9, "slidesToScroll": 3}'
              />
            </nav>
            <h3 className="heading-with-wrapper heading-button border-heading-bottom bar-with-button">
              <i className="fa fa-circle-o" />
              Memories
              <button
                id="add-new-memory"
                className="au-btn au-btn-icon au-btn--pink btn-lg"
                data-toggle="modal"
                data-target="#AddMemory"
              >
                <i className="fa fa-rotate-left" />
                Add Memory{" "}
              </button>
            </h3>
            <div
              className="box-wrapper bg-white box-with-padding timeline-content-wrapper"
              data-info="<%= @time_line.to_json %>"
            >
              <div className="tab-content pl-3 pt-2" id="nav-tabContent" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
