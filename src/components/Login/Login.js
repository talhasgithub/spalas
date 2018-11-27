import React, { Component } from "react";
import "./Login";
import LoginLayout from "./LoginLayout";
import { withRouter } from "react-router-dom";
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
  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/home");
  }
  render() {
    return (
      <LoginLayout>
        <form name="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
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
          <input
            type="submit"
            name="login"
            value="Log in"
            onClick={this.handleSubmit}
          />
        </form>
      </LoginLayout>
    );
  }
}
export default withRouter(Login);
