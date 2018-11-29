import React from "react";

const LeadEditForm = props => {
  const { handleChange, handleSubmit, fieldState } = props;
  return (
    <div className="box-with-padding box-wrapper bg-white border-5-rds">
      <h3 className="heading-with-button">
        Edit Lead
        <button
          className="au-btn au-btn-icon au-btn--pink btn-lg"
          onClick={handleSubmit}
        >
          <i className="fa fa-edit" style={{ fontSize: 15, color: "white" }} />
          Edit
        </button>
      </h3>

      <form action="" method="post" noValidate="validate">
        <div className="row form-group">
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              data-val="true"
              onChange={handleChange}
              data-val-required="Please enter name"
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
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              Surename
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
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              Address Line 1
            </label>
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
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              Email
            </label>
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
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              Address Line 2
            </label>
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
          <div className="col-md-6 col-sm-12">
            <label htmlFor="" className="control-label mb-1">
              Phone Number
            </label>
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
          <div className="col-md-2 col-sm-12">
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

          <div className="col-md-2 col-sm-12">
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

          <div className="col-md-2 col-sm-1">
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
          <div className="col-md-6 col-sm-12">
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
        </div>
      </form>
    </div>
  );
};

export default LeadEditForm;
