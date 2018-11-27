import React, { Component } from "react";
export default class ReleaseTab extends Component {
  render() {
    return (
      <div>
        <div className="tab-pane  " id="release" role="tab">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap wrapper-title position-relative">
                <h3>Release</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="box-wrapper box-with-padding bg-white release-wrapper">
                <div className="release-content">
                  <h3>Congralulations!!!</h3>
                  <p>
                    If you would like to leave comments about your experience
                    with Life&Story, please use the comment section below.{" "}
                  </p>
                </div>
                <div className="box-with-padding bg-white release-inner-wrapper">
                  <div className="release-video">
                    <span />
                    <img src={require("../../images/video-thumb-lg.png")} />
                  </div>
                  <div className="release-vidoe-info">
                    <ul>
                      <li>Life & Story of Tim</li>
                      <li>
                        <span>Size</span>6 Mb
                      </li>
                      <li>
                        <span>Upload Date</span>28 May 2018
                      </li>
                      <li>
                        <span>Release Date</span>29 May 2018
                      </li>
                      <li>
                        <span>Type</span>Final
                      </li>
                    </ul>
                  </div>
                  <div className="release-button">
                    <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                      <i className="zmdi zmdi-download" />
                      Download
                    </button>
                  </div>
                  <div className="leads-comments-wrapper">
                    <div className="comments-count">
                      <i className="fos message-icon" />
                      <span>3</span>Comments
                      <div className="comment-fld">
                        <input
                          type="text"
                          name="comments"
                          placeholder="Add a comments"
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          <i className="zmdi zmdi-mail-send" />
                        </button>
                      </div>
                      <div className="comment-list">
                        <ul>
                          <li>
                            <img src={require("../../images/avatar-01.jpg")} />
                            <div className="comment-box">
                              <span className="content-close">
                                <i className="fos-close-button" />
                              </span>

                              <div className="comment-top">
                                <label>Mark Taylor</label>
                                <i>Admin</i>
                                <i>14:50</i>
                                <i> 01 Jan 18</i>
                              </div>
                              <p>
                                I amended this memory and added in the lines
                                about Mary’s sister
                              </p>
                            </div>
                          </li>

                          <li>
                            <img src={require("../../images/avatar-01.jpg")} />
                            <div className="comment-box">
                              <span className="content-close">
                                <i className="fos-close-button" />
                              </span>
                              <div className="comment-top">
                                <label>Mark Taylor</label>
                                <i>Admin</i>
                                <i>14:50</i>
                                <i> 01 Jan 18</i>
                              </div>
                              <p>
                                I amended this memory and added in the lines
                                about Mary’s sister
                              </p>
                            </div>
                          </li>

                          <li>
                            <img src={require("../../images/avatar-01.jpg")} />
                            <div className="comment-box">
                              <span className="content-close">
                                <i className="fos-close-button" />
                              </span>
                              <div className="comment-top">
                                <label>Mark Taylor</label>
                                <i>Admin</i>
                                <i>14:50</i>
                                <i> 01 Jan 18</i>
                              </div>
                              <p>
                                I amended this memory and added in the lines
                                about Mary’s sister
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
