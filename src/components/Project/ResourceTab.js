import React, { Component } from "react";
export default class ResourceTab extends Component {
  render() {
    return (
      <div>
        <div className="tab-pane  " id="resources" role="tab">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap wrapper-title">
                <h3>Resources</h3>
                <div className="header-search">
                  <form className="au-form-icon--sm" action="" method="post">
                    <input
                      className="au-input--style2"
                      type="text"
                      placeholder="Search"
                    />
                    <button className="au-btn--submit2" type="submit">
                      <i className="zmdi zmdi-search" />
                    </button>
                  </form>
                </div>
                <button
                  className="au-btn au-btn-icon au-btn--pink btn-lg"
                  data-toggle="modal"
                  data-target="#largeModal"
                >
                  <i className="fa fa-upload" />
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="row row-wrapper">
            <div className="col-md-12">
              <div className="box-wrapper bg-white  box-with-padding picture-slider">
                <h1>Pic Slider</h1>
                <div className="slider-content-wrapper">
                  <div className="slider-content">
                    <h4>photo.jpg</h4>
                    Fusce ac elit eu metus vehicula volutpat vel non leo mauris
                    a condime….
                  </div>
                  <div className="slider-button">
                    <button
                      className="au-btn au-btn-icon au-btn--pink btn-lg"
                      data-toggle="modal"
                      data-target="#largeModal"
                    >
                      <i className="fa fa-download" />
                      <span>Download</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3 className="heading-with-wrapper heading-button">
                <i className="fa fa-circle-o" />
                Mary's Files
                <div className="table-data__tool-right js-item-menu  cirle-dd heading-dd">
                  <span className="archive-button">
                    <a href="#">
                      <i className="fos-icon download-icon" />
                    </a>
                  </span>
                  <span className="archive-button">
                    <a href="#">
                      <i className="fos-icon archive-icon" />
                    </a>
                  </span>
                </div>
              </h3>
              <div className="table-responsive box-wrapper">
                <table className="table table-data2 row-check-2 table-col-last-padding-20 ">
                  <thead>
                    <tr>
                      <th className="txt-center">
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark parent-checkmark" />
                        </label>
                        <span className="parent-check-title">Res ID </span>
                      </th>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th>Memory ID</th>
                      <th>Year</th>
                      <th>Description</th>
                      <th>Upload Date</th>
                      <th>Uploaded By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark" />
                        </label>
                        <div className="table-avatar avatar-lg avatar-square">
                          <img
                            src={require("../../images/avatar-01.jpg")}
                            alt="Terry Crowley"
                          />
                        </div>
                        <span className="table-avatar-title avatar-title-lg">
                          4778
                        </span>
                      </td>
                      <td>photo.jpg</td>
                      <td>2.55MB</td>
                      <td>Keyword</td>
                      <td>4578</td>
                      <td>1985</td>
                      <td>Fusce ac elit eu metus vehicula ….</td>
                      <td>01 Aug 18</td>
                      <td>01 Aug 18</td>
                    </tr>
                    <tr>
                      <td>
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark" />
                        </label>
                        <div className="table-file-icon table-file-icon-square">
                          <i className="fos-icon file-video-icon" />
                        </div>
                        <span className="table-avatar-title">
                          3434
                          <span />
                        </span>
                      </td>
                      <td>abc.mov</td>
                      <td>10.55MB</td>
                      <td>Raw</td>
                      <td>6554</td>
                      <td>1999</td>
                      <td>Fusce ac elit eu metus vehicula ….</td>
                      <td>02 Aug 18</td>
                      <td>02 Aug 18</td>
                    </tr>
                    <tr>
                      <td>
                        <label className="au-checkbox">
                          <input type="checkbox" />
                          <span className="au-checkmark" />
                        </label>
                        <div className="table-file-icon table-file-icon-square">
                          <i className="fos-icon file-audio-icon" />
                        </div>
                        <span className="table-avatar-title">
                          7654
                          <span />
                        </span>
                      </td>
                      <td>test.mp3</td>
                      <td>10.55MB</td>
                      <td>Raw</td>
                      <td>6554</td>
                      <td>1999</td>
                      <td>Fusce ac elit eu metus vehicula ….</td>
                      <td>02 Aug 18</td>
                      <td>02 Aug 18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
