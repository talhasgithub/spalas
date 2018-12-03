import React from "react";

const LoginForm = props => {
  const { handleChange, handleSubmit, fieldState } = props;
  return (
    <form name="login-form">
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
          value={fieldState.email.value}
        />
        {fieldState.email.error ? (
          <small id="surname-error" className="form-text form-error">
            Email Is Not Valid
          </small>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={fieldState.password.value}
          onChange={handleChange}
        />
        {fieldState.password.error ? (
          <small id="surname-error" className="form-text form-error">
            Password is Required
          </small>
        ) : (
          ""
        )}
      </div>
      <div className="login-info">
        <span className="login-left">
          <input type="checkbox" />
          Keep me logged in
        </span>
        <span className="login-right">
          <a href="#">Forget your password?</a>
        </span>
      </div>
      <input type="submit" name="login" value="Log in" onClick={handleSubmit} />
    </form>
  );
};

export default LoginForm;
