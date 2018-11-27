import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const LeadForm = props => {
  const {
    modal,
    toggle,
    onModalClosed,
    handleChange,
    handleSubmit,
    fieldState,
    isChannel
  } = props;
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      style={{ maxWidth: 1110 }}
      onClosed={onModalClosed}
    >
      {isChannel ? (
        <ModalHeader toggle={toggle}>Add New Lead</ModalHeader>
      ) : (
        <ModalHeader toggle={toggle}>Add New Client</ModalHeader>
      )}

      <ModalBody>
        <form action="" method="post" noValidate="novalidate">
          <div className="row form-group">
            <div id="first-name" className="col-md-6 col-sm-12">
              <label htmlFor="first_name" className="control-label mb-1">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="first_name"
                value={fieldState.first_name.value}
              />
              {fieldState.first_name.error ? (
                <small id="first-name-error" className="form-text form-error">
                  First Name Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
            <div id="surname" className="col-md-6 col-sm-12">
              <label htmlFor="surname" className="control-label mb-1">
                Surname
              </label>
              <input
                name="surname"
                type="text"
                onChange={handleChange}
                className="form-control"
                data-val="true"
                data-val-required="true"
                value={fieldState.surname.value}
              />
              {fieldState.surname.error ? (
                <small id="surname-error" className="form-text form-error">
                  Surname Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row form-group">
            <div id="address-line-one" className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Address Line 1</label>
              <input
                name="address_line_one"
                value={fieldState.address_line_one.value}
                type="text"
                onChange={handleChange}
                className="form-control"
                data-val="true"
                data-val-required=""
              />
              {fieldState.address_line_one.error ? (
                <small id="address-error" className="form-text form-error">
                  Address Line 1 Is Required
                </small>
              ) : (
                ""
              )}
            </div>
            <div id="email" className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Email</label>
              <input
                name="email"
                value={fieldState.email.value}
                type="text"
                onChange={handleChange}
                className="form-control"
                data-val="true"
                data-val-required=""
              />
              {fieldState.email.error ? (
                <small id="email-error" className="form-text form-error">
                  Email Is Not Valid
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row form-group">
            <div id="address-line-two" className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Address Line 2</label>
              <input
                name="address_line_two"
                value={fieldState.address_line_two.value}
                type="text"
                onChange={handleChange}
                className="form-control"
                data-val="true"
                data-val-required=""
              />
            </div>
            <div id="phone-number" className="col-md-6 col-sm-12">
              <label className="control-label mb-1">Phone Number</label>
              <input
                name="phone_number"
                value={fieldState.phone_number.value}
                type="text"
                onChange={handleChange}
                className="form-control"
                data-val="true"
                data-val-required=""
              />
              {fieldState.phone_number.error ? (
                <small id="phone-error" className="form-text form-error">
                  Phone Number Only Contain Number
                </small>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row form-group">
            <div id="country-select" className="col-md-2 col-sm-2">
              <label className="control-label mb-1">Country</label>
              <select
                name="country"
                value={fieldState.country.value}
                onChange={handleChange}
                className="form-control"
              >
                <option value="0">Select Channel</option>
                <option value="Webform">Webform</option>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
                <option value="Social Other">Social Other</option>
              </select>
              {fieldState.country.error ? (
                <small id="country-error" className="form-text form-error">
                  Country Is Required
                </small>
              ) : (
                ""
              )}
            </div>
            <div id="city" className="col-md-2 col-sm-4">
              <label className="control-label mb-1">City</label>
              <input
                name="city"
                value={fieldState.city.value}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
              {fieldState.city.error ? (
                <small id="city-error" className="form-text form-error">
                  City Is Required
                </small>
              ) : (
                ""
              )}
            </div>
            <div id="post-code" className="col-md-2 col-sm-4">
              <label className="control-label mb-1">Postcode</label>
              <input
                name="postcode"
                value={fieldState.postcode.value}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
              {fieldState.postcode.error ? (
                <small id="post-code-error" className="form-text form-error">
                  Postcode Is Required
                </small>
              ) : (
                ""
              )}
            </div>
            {isChannel ? (
              <div id="channel-select" className="col-md-6 col-sm-6">
                <label className="control-label mb-1">Channel</label>
                <select
                  name="channel"
                  value={fieldState.channel.value}
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="0">Select Channel</option>
                  <option value="Webform">Webform</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Social Other">Social Other</option>
                </select>
                {fieldState.channel.error ? (
                  <small id="channel-error" className="form-text form-error">
                    Channel Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-btn-footer">
            <button
              id="new-lead-button"
              type="button"
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              <i className="fa fa-plus" />
              Add
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default LeadForm;
