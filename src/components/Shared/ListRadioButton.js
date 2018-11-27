import React, { Component } from "react";

export default class ListRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(!this.state.isChecked);
    this.setState(
      pre => {
        return { isChecked: !this.state.isChecked };
      },
      () =>
        this.props.handleListCheckboxChange(
          this.state.isChecked,
          this.props.leadId
        )
    );
  }

  render() {
    return (
      <label className="au-checkbox">
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
        <span className="au-checkmark" />
      </label>
    );
  }
}
