import React, { Component } from "react";

import HocForm from "../../Shared/HocForm";
import AddMemoryForm from "./AddMemoryForm";
import { MemoryAddFields } from "../../../Utilities/FormsModel";
import MakeContextConsumer from "../../Auth/MakeContextConsumer";

class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.addMemoryCall = this.addMemoryCall.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  addMemoryCall(memory) {
    let $this = this;
    console.log(memory);
    memory["project_id"] = this.props.projectId;
    this.props
      .authAxios({
        method: "post",
        data: {
          memory: memory
        },
        url: "/api/v1/memories"
      })
      .then(function(response) {
        $this.setState({
          leads: response.data.data
        });
      });
  }

  render() {
    return (
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
            onClick={this.toggle}
          >
            <i className="fa fa-rotate-left" />
            Add Memory
          </button>
        </h3>
        <div
          className="box-wrapper bg-white box-with-padding timeline-content-wrapper"
          data-info="<%= @time_line.to_json %>"
        >
          <div className="tab-content pl-3 pt-2" id="nav-tabContent" />
        </div>
        <HocForm
          toggle={this.toggle}
          modal={this.state.modal}
          formFields={MemoryAddFields}
          FormView={AddMemoryForm}
          submitCall={this.addMemoryCall}
          isChannel={false}
        />
      </div>
    );
  }
}

export default MakeContextConsumer(Memory);
