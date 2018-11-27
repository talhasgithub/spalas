import React, { Component } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Lead, Client, Project, Dashboard } from "../index";
import { Route } from "react-router-dom";
export default class Home extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="page-wrapper">
        <Sidebar match={match} />
        <div className="page-container">
          <Header />
          <div className="main-content">
            <Route path={`${match.path}/lead`} component={Lead} />
            <Route path={`${match.path}/client`} component={Client} />
            <Route path={`${match.path}/project`} component={Project} />
            <Route path={`${match.path}`} exact component={Dashboard} />
            <Route
              path={`${match.path}/dashboard`}
              exact
              component={Dashboard}
            />
          </div>
        </div>
      </div>
    );
  }
}
