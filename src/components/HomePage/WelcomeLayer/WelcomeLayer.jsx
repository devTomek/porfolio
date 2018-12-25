import React from 'react';
import './WelcomeLayer.scss';

const WelcomeLayer = () =>
  <div className="welcome-layer">
    <div className="text-wrapper">
      <span className="author">
        <p>Tomasz Chybziński</p>
      </span>
      <p>Hello!</p>
      <p>I am a JavaScript Developer</p>
      <p>I create <span className="changing-word-wrapper">Websites</span></p>
    </div>
  </div >;

export default WelcomeLayer;