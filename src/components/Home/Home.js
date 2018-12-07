import React, { Component } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import axios from "axios";
import { Lead, Client, Project, Dashboard } from "../index";
import { Route, Redirect, Switch } from "react-router-dom";
import MakeContextConsumer from "../Auth/MakeContextConsumer";

class Home extends Component {
  render() {
    const { match, location } = this.props;
    console.log(location);
    // if (
    //   this.props.authData.isAuthenticated == false ||
    //   this.props.authData.uid == ""
    // ) {
    //   console.log("dont get me here");
    //   return (
    //     <Redirect to={{ pathname: "/", state: { callbackURL: match.url } }} />
    //   );
    // }
    return (
      <div className="page-wrapper">
        <Sidebar match={match} />
        <div className="page-container">
          <Header />
          <div className="main-content">
            <Switch>
              <Route path={`${match.path}/lead`} component={Lead} />
              <Route path={`${match.path}/client`} component={Client} />
              <Route path={`${match.path}/project`} component={Project} />
              <Route path={`${match.path}`} exact component={Dashboard} />
              <Route
                path={`${match.path}/dashboard`}
                exact
                component={Dashboard}
              />
              <Redirect to={`${match.path}/dashboard`} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default MakeContextConsumer(Home);
