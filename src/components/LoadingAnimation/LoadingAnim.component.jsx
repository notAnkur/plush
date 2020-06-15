import React from "react";
import "./LoadingAnim.css";

const LoadingAnim = () => {
  
  return (
    <div>
      <div id="circle_container">
        <div id="stars"></div>
        <div id="load_wrapper">
          <div id="sun"></div>
          <div id="moon"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnim;