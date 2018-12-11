import React, { PureComponent } from "react";

class MemoryListing extends PureComponent {
  render() {
    console.log("i am not render");
    return (
      <div className="box-wrapper bg-white box-with-padding timeline-content-wrapper">
        <div className="tab-content pl-3 pt-2" id="nav-tabContent">
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map(value => {
              return (
                <div className="col-lg-4 col-md-6" key={value + value}>
                  <div
                    className="timeline-box"
                    data-toggle="modal"
                    data-target="#editMemory"
                  >
                    <i className="fa fa-circle txt-green" />
                    <div className="timeline-top">
                      <span className="date">19 June 2018</span>
                      <div className="timeline-top-buttons">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="fa fa-edit" />
                        </button>

                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="fos-icon archive-icon" />
                        </button>

                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="fa fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                    <h4>Mary's Birthday</h4>
                    <p>
                      Morbi malesuada consequat odio, sit amet ultrices est
                      ultrices ac. Donec quis maximus leo, sit amet ornare odio.
                      New York Hospital lorem. Duis eu mollis turpis....
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryListing;
