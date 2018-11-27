import React, { Component } from "react";
import { FieldValidator } from "../../Utilities/FormValidation";

class HocForm extends Component {
  constructor(props) {
    super(props);
    if (this.props.isFilled) {
      this.state = { formFields: this.props.formFields };
    } else {
      this.state = {
        formFields: new this.props.formFields()
      };
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFormSubmitRequest = this.sendFormSubmitRequest.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.populateFields = this.populateFields.bind(this);
  }

  onModalClosed() {
    this.setState({
      formFields: new this.props.formFields()
    });
  }

  handleChange(e) {
    e.preventDefault();
    let error = false;
    console.log(this.state.formFields);
    let field = this.state.formFields[e.target.name];
    let name = e.target.name;
    field.value = e.target.value;
    if (!FieldValidator(field)) {
      error = true;
    }
    let fields = Object.assign({}, this.state);

    fields.formFields[name] = {
      value: this.state.formFields[name].value,
      error: error,
      constraints: this.state.formFields[name].constraints
    };
    this.setState(previous_state => {
      return fields;
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.checkFormValid()) {
      this.sendFormSubmitRequest();
    }
  }

  populateFields(fieldsObject) {
    this.setState(previous_state => {
      return fieldsObject;
    });
  }

  checkFormValid() {
    let isValid = true;
    let formFields = { ...this.state.formFields };
    console.log(this.state.formFields);
    for (let field in this.state.formFields) {
      if (!FieldValidator(this.state.formFields[field])) {
        console.log(this.state[field]);
        formFields[field] = {
          value: this.state.formFields[field].value,
          error: true,
          constraints: this.state.formFields[field].constraints
        };
        isValid = false;
      }
    }
    console.log(formFields);
    this.setState({
      formFields
    });
    return isValid;
  }

  sendFormSubmitRequest() {
    let formData = { ...this.state.formFields };
    for (let field in this.state.formFields) {
      formData[field] = this.state.formFields[field].value;
    }
    this.props.submitCall(formData);
  }

  render() {
    console.log(this.state);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++");
    console.log(this.props.formFields);

    const { FormView } = this.props;
    const { modal, toggle } = this.props;
    return (
      <FormView
        modal={modal}
        toggle={toggle}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        fieldState={this.state.formFields}
        onModalClosed={this.onModalClosed}
        isChannel={this.props.isChannel}
        populateFields={this.populateFields}
      />
    );
  }
}

export default HocForm;
