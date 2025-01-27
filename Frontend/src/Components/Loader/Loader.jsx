import React from "react";
import "./Loader.css"; // Import the loader CSS file

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="loader"></div> {/* Custom loader */}
  </div>
);

export default LoadingSpinner;
