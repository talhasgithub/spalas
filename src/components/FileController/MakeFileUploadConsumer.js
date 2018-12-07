import React from "react";
import FileUploadContext from "./FileUploadContext";
const MakeFileUploadConsumer = ConsumerComponent => {
  return props => {
    return (
      <FileUploadContext.Consumer>
        {({ fileController }) => {
          return (
            <ConsumerComponent {...props} fileController={fileController} />
          );
        }}
      </FileUploadContext.Consumer>
    );
  };
};

export default MakeFileUploadConsumer;
