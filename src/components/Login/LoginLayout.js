import React, { Component } from "react";

const LoginLayout = props => {
  return (
    <div className="login-page-wrapper">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-logo-wrapper">
            <img src={require("../../images/logo.png")} />
          </div>
          <h3>Let's build together a Memorable Story of your life!</h3>
          {props.children}
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};
export default LoginLayout;
