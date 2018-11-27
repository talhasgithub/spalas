import React from "react";

const ClientEditForm = props => {
  const {
    handleChange,
    handleSubmit,
    fieldState,
    makeEditable,
    isEditable
  } = props;
  return (
    <div className="client-profile">
      <div className="profile-header round-buttons">
        <div className="profile-avatar">
          <img
            src={require("../../images/avatar-01.jpg")}
            alt="Terry Crowley"
          />
        </div>
        {isEditable ? (
          ""
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={makeEditable}
          >
            {fieldState.first_name.value}
            {fieldState.surname.value} &nbsp; <i className="fa fa-edit" />
          </button>
        )}
        {isEditable ? (
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
        ) : (
          ""
        )}
        <button type="button" className="btn btn-outline-secondary btn-sm">
          <i className="fa fa-upload" />
          &nbsp; Upload Avatar
        </button>
        <button type="button" className="btn btn-outline-secondary btn-sm">
          <i className="fa fa-envelope" />
          &nbsp; Rest Password
        </button>
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-circle" />
          &nbsp; Active
        </button>
      </div>
      <div className="profile-body">
        <div className="row">
          <div className="col-md-5">
            <label>Address 1</label>
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
          <div className="col-md-3">
            <label>City</label>
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
          <div className="col-md-4">
            <label>Telephone</label>
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
        <div className="row">
          <div className="col-md-5">
            <label>Address 2</label>
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

          <div className="col-md-4">
            <label>Email</label>
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
        <div className="row">
          <div className="col-md-5">
            <label>Postcode</label>
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
          {isEditable ? (
            <button
              type="button"
              className="au-btn au-btn-icon au-btn--pink btn-lg"
              onClick={handleSubmit}
            >
              Save &nbsp; <i className="fa fa-save" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientEditForm;
