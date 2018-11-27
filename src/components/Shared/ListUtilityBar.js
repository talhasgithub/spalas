import React, { Component } from "react";
import axios from "axios";
import { Select } from "antd";
const Option = Select.Option;
class ListUtilityBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDown: false
    };
    this.showDropDown = this.showDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    console.log(this.props);
  }

  showDropDown(e) {
    e.preventDefault();
    this.setState(
      {
        isDropDown: true
      },
      () => {
        document.addEventListener("mousedown", this.closeDropDown);
      }
    );
  }

  handleSort(sortBy, e) {
    this.fetchSort(sortBy);
  }

  fetchSort(sortBy) {
    console.log("hello Woirld");
    axios({
      method: "get",
      url: `/api/v1/${this.props.owner}?sort_by=${sortBy}`
    }).then(
      function(response) {
        console.log(response.data.data);
        this.props.updateContent(response.data.data);
      }.bind(this)
    );
  }

  closeDropDown(event) {
    document.removeEventListener("mousedown", this.closeDropDown);
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({
        isDropDown: false
      });
    }
  }

  render() {
    return (
      <div className="table-data__tool table-top-pagination-bar">
        <div className="table-data__tool-left">
          <span className="table-top-pagination-bar-txt mr-2">Showing</span>
          <div className="rs-select2--light rs-select2--md">
            <Select defaultValue="10" style={{ width: 55 }}>
              <Option value="10">10</Option>
              <Option value="20">20</Option>
              <Option value="50">50</Option>
            </Select>
          </div>
          <span className="table-top-pagination-bar-txt ml-2">
            out of 500 Leads
          </span>
          <div className="data-table-top-pagination-button">
            <a href="" className="arrow-pagi page-previous">
              <i className="fa fa-angle-left" />
            </a>
            <a href="" className="arrow-pagi page-next">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>

        <div
          className={`table-data__tool-right js-item-menu  cirle-dd  ${
            this.state.isDropDown ? "show-dropdown" : ""
          }`}
          ref={element => {
            this.dropdownMenu = element;
          }}
        >
          <span className="archive-button">
            <a href="#">
              <i className="fos-icon archive-icon" />
            </a>
          </span>
          <span className="dot-with-pagi">
            <button onClick={this.showDropDown}>
              <i className="fa fa-circle " />
              <i className="fa fa-circle mx-1" />
              <i className="fa fa-circle" />
            </button>
          </span>

          <div className="account-dropdown js-dropdown">
            <div className="account-dropdown__item">
              <span className="set-status">Sort By</span>
            </div>
            <ul>
              {this.props.columnForSorting.map(column => {
                return (
                  <li key={column}>
                    <button
                      onClick={this.handleSort.bind(this, column.toLowerCase())}
                    >
                      {column}
                    </button>
                  </li>
                );
              })}
            </ul>
            <span className="set-status">Export</span>
            <ul>
              <li>
                <button>Export(.xlsx)</button>
              </li>
            </ul>
            <div className="cirle-dd-button">
              <button
                type="button"
                className="btn btn-lg btn-outline-pink"
                onClick={this.props.converToClient}
              >
                <i className="fa fa-arrow-right" />
                &nbsp; Convert to Client
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListUtilityBar;
