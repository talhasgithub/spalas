import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";
import axios from "axios";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthCredentials from "./components/Auth/AuthCredentials";
import AuthContext from "./components/Auth/AuthContext";
import Page404 from "./components/Shared/Page404";
import FileController from "../src/components/FileController/FileController";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authData: new AuthCredentials() };
    this.getAuthenticate = this.getAuthenticate.bind(this);
    this.getUnAuthenticate = this.getUnAuthenticate.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.authAxios = null;
  }

  getAuthenticate(credentials) {
    this.setState({
      authData: credentials
    });
  }

  getUnAuthenticate() {
    this.setState(prev => {
      return { authData: new AuthCredentials() };
    });
  }
  renderHome(props) {
    return <FileController Home={Home} {...props} />;
  }
  render() {
    const AuthData = {
      authData: { ...this.state.authData }
    };

    const authAxios = axios.create({
      headers: {
        "access-token": AuthData.authData.accessToken,
        client: AuthData.authData.client,
        uid: AuthData.authData.uid,
        "token-type": AuthData.authData.tokenType,
        expiry: AuthData.authData.expiry
      }
    });

    loadProgressBar({}, authAxios);
    return (
      <AuthContext.Provider
        value={{
          getAuthenticate: this.getAuthenticate,
          getUnAuthenticate: this.getUnAuthenticate,
          authData: AuthData.authData,
          authAxios: authAxios
        }}
      >
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" render={this.renderHome} />
          <Route
            path="*"
            render={({ location }) => <Page404 location={location} />}
          />
        </Switch>
      </AuthContext.Provider>
    );
  }
}
export default App;
