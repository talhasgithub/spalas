import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";

import { FieldValidator } from "../../Utilities/FormValidation";
import SubcriptionForm from "./SubcriptionForm";

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formFields;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.name == "package") {
      this.handlePackage(e.target.value);
    }
    console.log(e);
    let error = false;
    let field = this.props.formFields[e.target.name];
    field.value = e.target.value;
    if (!FieldValidator(field)) {
      error = true;
    }

    this.setState({
      [e.target.name]: {
        value: e.target.value,
        error: error,
        constraints: field.constraints
      }
    });
  }

  checkFormValid() {
    let isValid = true;
    let tempState = Object.assign({}, this.props.formFields);
    for (let field in this.state) {
      if (!FieldValidator(this.state[field])) {
        this.setState(previousState => {
          tempState[field] = {
            value: this.state[field].value,
            error: true,
            constraints: this.state[field].constraints
          };
        });

        console.log(this.state);
        isValid = false;
      }
    }
    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.checkFormValid()) {
      let formData = this.props.formFields;
      for (let field in this.state) {
        formData[field] = this.state[field].value;
      }
      this.props.submitCall(formData);
    }
  }

  handleDate(day, dayPickerInput, handleChange) {
    console.log(dayPickerInput);

    let e = {
      target: {
        name: "start_date",
        value: day
      },
      preventDefault: () => {
        return "";
      }
    };
    return handleChange(e);
  }

  handlePackage(id) {
    return this.populateFields(this.props.onPackageChange(id));
  }

  populateFields(fieldsObject) {
    console.log(fieldsObject || "not found");
    this.setState(previous_state => {
      return fieldsObject;
    });
  }
  onModalClosed() {
    this.setState(this.props.formFields);
  }
  render() {
    const { modal, toggle } = this.props;
    console.log(this.state);
    return (
      <Modal
        isOpen={modal}
        toggle={toggle}
        style={{ maxWidth: 1110 }}
        onClosed={this.onModalClosed}
      >
        <ModalHeader toggle={toggle}>Add Subscription</ModalHeader>

        <ModalBody>
          <div>
            <div className="row form-group">
              <div className="col col-md-3">
                <label htmlFor="first_name" className="control-label mb-1">
                  Subscription ID
                </label>
                <input
                  type="text"
                  id="disabled-input"
                  name="subscription_id"
                  value={this.state.subscription_id.value}
                  disabled={true}
                  className="form-control"
                  onChange={this.handleChange}
                />
                {this.state.subscription_id.error ? (
                  <small
                    id="subscription-id-error"
                    className="form-text form-error"
                  >
                    Subscription Id Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row form-group">
              <div className="col col-md-12">
                <label className="control-label mb-1">Package</label>
                <select
                  name="package"
                  id="country"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.subscription_id.value}
                >
                  <option value="0">Select Package</option>
                  {this.props.subscriptions.map(function(subs, index) {
                    return (
                      <option value={subs.id} key={subs.id}>
                        {subs.name}
                      </option>
                    );
                  })}
                </select>
                {this.state.package.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Package Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row form-group">
              <div className="col col-md-12">
                <label className="control-label mb-1">Description</label>
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  value={this.state.description.value}
                  onChange={this.handleChange}
                />
                {this.state.description.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Description Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="row form-group">
              <div className="col col-md-12">
                <label className="control-label mb-1">Start Date</label>
                <div className="w-100" />
                <DayPickerInput
                  value={
                    this.state.start_date.value
                      ? new Date(this.state.start_date.value)
                      : new Date()
                  }
                  onDayChange={(e, modifier, dayPickerInput) => {
                    this.handleDate(e, dayPickerInput, this.handleChange);
                  }}
                  name="start_date"
                />
                {this.state.start_date.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Start Date Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="form-btn-footer">
              <button
                id="add-subscription"
                type="button"
                className="btn btn-primary btn-lg"
                onClick={this.handleSubmit}
              >
                <i className="zmdi zmdi-plus" />
                Add
              </button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default SubscriptionForm;
