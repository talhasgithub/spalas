import React, { Component } from "react";

import HocForm from "../../Shared/HocForm";
import AddMemoryForm from "./AddMemoryForm";
import { MemoryAddFields } from "../../../Utilities/FormsModel";
import MakeContextConsumer from "../../Auth/MakeContextConsumer";
import MemoryListing from "./MemoryListing";
import MemoryTimeline from "./MemoryTimeline";

class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      memoryList: [],
      memoryTimeline: [],
      activeYear: ""
    };
    this.toggle = this.toggle.bind(this);
    this.addMemoryCall = this.addMemoryCall.bind(this);
    this.fetchMemory = this.fetchMemory.bind(this);
    this.onProductClick = this.onProductClick.bind(this);
  }

  onProductClick(year) {
    this.fetchMemory(year);
  }

  async componentDidMount() {
    let memoryTimeline = await this.props
      .authAxios({
        method: "get",
        url: `/api/v1/projects/${this.props.projectId}/timeline`
      })
      .then(response => {
        return response.data.data;
      });

    let memoryList = await this.props
      .authAxios({
        method: "get",
        url: `/api/v1/projects/${this.props.projectId}/memories?${
          memoryTimeline[0]
        }`
      })
      .then(response => {
        return response.data.data;
      });

    this.setState(prev => {
      return { memoryList: memoryList, memoryTimeline: memoryTimeline };
    });
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

  fetchMemory(year) {
    let $this = this;
    this.props
      .authAxios({
        method: "get",
        url: `/api/v1/projects/${this.props.projectId}/memories`,
        data: {
          year: year
        }
      })
      .then(response => {
        console.log(response);
        $this.setState({
          memoryList: response.data.data,
          activeYear: year
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="overview-wrap wrapper-title position-relative">
          <h3>Timeline</h3>
        </div>
        <div className="default-tab">
          {this.state.memoryTimeline[0] ? (
            <MemoryTimeline
              memoryTimeline={this.state.memoryTimeline}
              fetchMemory={this.fetchMemory}
              onProductClick={this.onProductClick}
              activeYear={this.state.activeYear}
            />
          ) : null}
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
          <MemoryListing />
          <HocForm
            toggle={this.toggle}
            modal={this.state.modal}
            formFields={MemoryAddFields}
            FormView={AddMemoryForm}
            submitCall={this.addMemoryCall}
            isChannel={false}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MakeContextConsumer(Memory);
