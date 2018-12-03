import React from "react";
import AuthContext from "./AuthContext";
const MakeContextConsumer = ConsumerComponent => {
  return props => {
    return (
      <AuthContext.Consumer>
        {({ getAuthenticate, getUnAuthenticate, authData, authAxios }) => {
          return (
            <ConsumerComponent
              {...props}
              getAuthenticate={getAuthenticate}
              getUnAuthenticate={getUnAuthenticate}
              authData={authData}
              authAxios={authAxios}
            />
          );
        }}
      </AuthContext.Consumer>
    );
  };
};

export default MakeContextConsumer;
