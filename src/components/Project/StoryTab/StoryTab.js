import React, { Component } from "react";

import AudioListing from "./AudioListing";
import Memory from "../Memory/Memory";
import MakeFileUploadConsumer from "../../FileController/MakeFileUploadConsumer";

class StoryTab extends Component {
  constructor(props) {
    super(props);
  }

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
          <AudioListing fileController={this.props.fileController} />
          <Memory projectId={this.props.projectId} />
        </div>
      </div>
    );
  }
}
export default MakeFileUploadConsumer(StoryTab);
