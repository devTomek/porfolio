import React from 'react';
import './WelcomeLayer.scss';

const WelcomeLayer = () =>
  <div className="welcome-layer">
    <div className="text-wrapper">
      <p>
        <div className="author">Tomasz Chybziński</div>
        Hello!<br />
        I am a JavaScript Developer<br />
        I create <span className="changing-word-wrapper">Websites</span>
      </p>
    </div>
  </div>;

export default WelcomeLayer;