import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <TailSpin height="50" width="50" color="#ff1493" />
  </div>
);

export default LoadingSpinner;
