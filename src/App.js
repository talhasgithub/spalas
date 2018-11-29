import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { loadProgressBar } from "axios-progress-bar";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
class App extends Component {
  render() {
    loadProgressBar();
    return (
      <Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Fragment>
    );
  }
}
export default App;
