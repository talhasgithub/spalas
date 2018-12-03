import React, { Component } from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

import LoginLayout from "./LoginLayout";
import HocForm from "../Shared/HocForm";
import LoginForm from "./LoginForm";
import { LoginFields } from "../../Utilities/FormsModel";
import MakeContextConsumer from "../Auth/MakeContextConsumer";
import AuthCredentials from "../Auth/AuthCredentials";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(data) {
    console.log(data);
    this.getAuthenticate(data);
  }

  getAuthenticate(credentials) {
    const $this = this;
    axios({
      method: "post",
      url: "/api/v1/auth/sign_in",
      data: {
        email: credentials.email,
        password: credentials.password
      }
    }).then(function(response) {
      console.log(response);
      const authData = new AuthCredentials(
        true,
        response.headers["access-token"],
        response.headers.client,
        response.headers.uid,
        response.headers["token-type"],
        response.headers.expiry
      );
      $this.props.getAuthenticate(authData);
    });
  }

  render() {
    console.log(this.props.location);
    if (this.props.authData.isAuthenticated && this.props.authData.uid) {
      return <Redirect to="/home" />;
    }
    return (
      <LoginLayout>
        <HocForm
          formFields={LoginFields}
          FormView={LoginForm}
          submitCall={this.handleSubmit}
          isFilled={false}
        />
      </LoginLayout>
    );
  }
}
export default MakeContextConsumer(withRouter(Login));
