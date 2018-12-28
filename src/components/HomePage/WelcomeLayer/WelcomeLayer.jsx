import React from "react";
import "./WelcomeLayer.scss";

const WelcomeLayer = ({ text, dynamicText }) => (
  <div className="welcome-layer">
    <div className="text-wrapper">
      <span className="author">
        <p>{text.author}</p>
      </span>
      <p>{text.hello}</p>
      <p>{text.JSDev}</p>
      <div className="last-line">
        <p>{text.create}</p>
        <div className="dynamic-text">{dynamicText}</div>
      </div>
    </div>
  </div>
);

export default WelcomeLayer;
