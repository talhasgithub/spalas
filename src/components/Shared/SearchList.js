import React, { Component } from "react";
import axios from "axios";

export default class SearchListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      searchText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchSearch();
  }

  fetchSearch() {
    axios({
      method: "get",
      url: `/api/v1/${this.props.owner}?search=${this.state.searchText}`
    }).then(
      function(response) {
        console.log(response.data.data);
        this.props.updateContent(response.data.data);
      }.bind(this)
    );
  }

  render() {
    return (
      <div className="header-search">
        <form
          className="au-form-icon--sm"
          action=""
          method="get"
          onSubmit={this.handleSubmit}
        >
          <input
            className="au-input--style2"
            type="text"
            placeholder="Search"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <button className="au-btn--submit2" type="submit">
            <i className="fa fa-search" style={{ fontSize: 20 }} />
          </button>
        </form>
      </div>
    );
  }
}
