import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";

function handleDate(day, handleChange, name) {
  let e = {
    target: {
      name: name,
      value: day
    },
    preventDefault: () => {
      return "";
    }
  };
  return handleChange(e);
}

const ProjectForm = props => {
  const {
    modal,
    toggle,
    onModalClosed,
    handleChange,
    handleSubmit,
    fieldState,
    subscriptions
  } = props;
  console.log(subscriptions);
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      style={{ maxWidth: 1110 }}
      onClosed={onModalClosed}
    >
      <ModalHeader toggle={toggle}>Add New Project</ModalHeader>

      <ModalBody>
        <form action="" method="post" noValidate="novalidate">
          <div className="row form-group">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="subject" className="control-label mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-control"
                value={fieldState.subject.value}
                onChange={handleChange}
              />
              {fieldState.subject.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Subject Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="surname" className="control-label mb-1">
                Date of Birth
              </label>
              <div className="w-100" />
              <DatePicker
                selected={fieldState.date_of_birth.value}
                onChange={date => {
                  handleDate(date, handleChange, "date_of_birth");
                }}
                placeholderText="Select Date Of Birth"
              />
              {fieldState.date_of_birth.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Date of Birth Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-6 col-sm-12">
              <label className="control-label mb-1">
                Relationship to Client
              </label>
              <select
                name="relationship_to_client"
                id="relationship"
                className="form-control"
                onChange={handleChange}
              >
                <option value="0">Select Relationship</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="grandparent">Grand Parent</option>
                <option value="relative">Relative</option>
                <option value="subjectisclient">Subject is Client</option>
                <option value="other">Other</option>
              </select>
              {fieldState.relationship_to_client.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Relationship to Client Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Gender</label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                onChange={handleChange}
              >
                <option value="0">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {fieldState.gender.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Gender Is Required
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Subscription</label>
              <select
                name="client_subscription_id"
                id="client_subscription_id"
                className="form-control"
                onChange={handleChange}
              >
                <option value="0">Select Package</option>
                {subscriptions.map((subs, index) => {
                  return (
                    <option
                      value={subs.id}
                      key={subs.id + subs.subscription_id}
                    >
                      {subs.subscription_id}
                    </option>
                  );
                })}
              </select>
              {fieldState.client_subscription_id.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Subscription Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Deadline Date</label>
              <div className="w-100" />
              <DatePicker
                selected={fieldState.deadline.value}
                onChange={date => {
                  handleDate(date, handleChange, "deadline");
                }}
                minDate={new Date()}
                placeholderText="Select DeadLine"
              />
              {fieldState.deadline.error ? (
                <small id="first-name-error" className="form-text form-error">
                  Deadline Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="form-btn-footer">
            <button
              id="submit-button"
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              <i className="zmdi zmdi-plus" />
              Add
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ProjectForm;
