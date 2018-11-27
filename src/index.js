import React from "react";
import ReactDOM from "react-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./font-face.css";
import "axios-progress-bar/dist/nprogress.css";
import "react-day-picker/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "./application.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
