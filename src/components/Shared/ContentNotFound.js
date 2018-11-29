import React from "react";
import { Redirect } from "react-router-dom";
const UnResolvedRoute = WrappedComponent => {
  return props => {
    if (props.content) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to={`/home/${props.contentType}`} />;
    }
  };
};

export default UnResolvedRoute;
