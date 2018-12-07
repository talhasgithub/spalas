import React, { Component } from "react";
import axios from "axios";

import FileUploadContext from "./FileUploadContext";
export default class FileController extends Component {
  constructor(props) {
    super(props);
    this.noOfFilesDownloading = 0;
    this.getFileToSend = this.getFileToSend.bind(this);
    this.getSignedUrl = this.getSignedUrl.bind(this);
  }

  getSignedUrl(fileName, file) {
    axios({
      method: "get",
      url: `/api/v1/aws_direct_link?filename=${fileName}`
    }).then(response => {
      console.log(response);
      let url = response.data.data.url;
      this.sendFileToAws(url, file);
    });
  }

  sendFileToAws(url, file) {
    console.log(url);
    console.log(file);
    axios({
      method: "put",
      url: url,
      data: file,
      headers: {
        "Content-Type": file.type,
        "Access-Control-Allow-Origin": "*"
      },
      responseType: "json",
      onUploadProgress: progressEvent => {
        console.log(progressEvent);
      }
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log("aaaaa");
        console.log(error);
      });
  }

  getFileToSend(file) {
    console.log(file);
    this.getSignedUrl(file.name, file);
  }

  render() {
    const { Home } = this.props;
    return (
      <FileUploadContext.Provider
        value={{ fileController: { getFileToSend: this.getFileToSend } }}
      >
        <Home {...this.props} />
      </FileUploadContext.Provider>
    );
  }
}
