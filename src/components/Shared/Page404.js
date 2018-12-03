import React from "react";

const Page404 = props => {
  const { location } = props;
  return (
    <div
      style={{
        width: 100 + "%",
        height: 100 + "%",
        backgroundColor: "#f77b7b",
        position: "absolute"
      }}
    >
      <div
        className="row"
        style={{ textAlign: "center", paddingTop: 120 + "px" }}
      >
        <div className="col-md-12">
          <h1 style={{ color: "white", fontSize: 150 }}>404</h1>
        </div>
        <div className="col-md-12">
          <h3 style={{ color: "white", fontSize: 50 }}>Page Not Found</h3>
          <h3 style={{ color: "white", fontSize: 50 }}>
            At {location.pathname}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Page404;
