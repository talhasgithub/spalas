import React, { Component, Fragment } from "react";

export default class ProjectWorkflow extends Component {
  constructor(props) {
    super(props);
    this.clickToEdit = this.clickToEdit.bind(this);
    this.clickToNonEditable = this.clickToNonEditable.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.updateProject = this.updateProject.bind(this);
    this.editProjectInList = this.editProjectInList.bind(this);
    this.EditUi = this.EditUi.bind(this);
    this.EditableUi = this.EditableUi.bind(this);
    this.state = {
      isEditable: false,
      inputName: "",
      inputValue: ""
    };
  }

  clickToEdit() {
    this.setState({
      isEditable: true
    });
  }

  clickToNonEditable() {
    this.setState({
      isEditable: false,
      inputName: "",
      inputValue: ""
    });
  }

  handleOnChange(e) {
    if (e.hasOwnProperty("target")) {
      e.preventDefault();
      this.setState({
        inputValue: e.target.value,
        inputName: e.target.name
      });
    } else {
      console.log(e);
      this.setState({
        inputValue: e,
        inputName: this.props.fieldName
      });
    }
  }

  handleOnSubmit() {
    console.log(this.state.inputValue);
    this.updateProject(this.state.inputValue);
    this.setState({
      isEditable: false
    });
  }

  updateProject(value) {
    this.props
      .authAxios({
        method: "put",
        url: `/api/v1/projects/${this.props.project.id}`,
        data: {
          project: {
            [this.state.inputName]: value
          }
        },
        headers: { "Access-Control-Allow-Origin": "*" }
      })
      .then(this.editProjectInList)
      .catch(function(error) {
        console.log(error);
      });
  }

  editProjectInList(response) {
    this.props.updateProject(response.data.data);
  }

  EditUi() {
    console.log(this.state.inputValue);
    const inputValue = this.state.inputValue;
    return (
      <div id="gender-input" className="input-group input-group-sm mb-3">
        {this.props.render(
          this.handleOnChange,
          this.state.inputValue || new Date()
        )}
        <div className="input-group-append">
          <span className="input-group-text">
            <button id="save-gender" onClick={this.handleOnSubmit}>
              <i className="fa fa-save" style={{ fontSize: 10 }} />
            </button>
          </span>
          <span className="input-group-text">
            <button id="hide-input-gender" onClick={this.clickToNonEditable}>
              <i className="fa fa-times" style={{ fontSize: 10 }} />
            </button>
          </span>
        </div>
      </div>
    );
  }

  EditableUi() {
    return (
      <span id="span-gender">
        {this.props.field}
        <button onClick={this.clickToEdit}>
          <i className="fa fa-edit mx-2" />
        </button>
      </span>
    );
  }

  render() {
    return (
      <Fragment>
        {this.state.isEditable ? this.EditUi() : this.EditableUi()}
      </Fragment>
    );
  }
}
