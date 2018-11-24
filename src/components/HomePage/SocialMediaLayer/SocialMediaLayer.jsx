import './SocialMediaLayer.scss';
import React from 'react';
import manTyping2 from '../../../assets/manTyping2.mp4';
import manTyping2Frame from '../../../assets/manTyping2Frame.PNG';

const SocialMediaLayer = () =>
  <div className="social-media-layer">
    <div className="video">
      <video poster={manTyping2Frame} autoPlay muted loop>
        <source src={manTyping2}/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="content-wrapper">
      <div className="header">Contact</div>
      <div className="content">
        <div className="column">
          <img/>
          <p>Tomasz Chybziński</p>
        </div>
        <div className="column">
          <div className="github">
            <span className="fa"/>
            <p>github.com/devTomek</p>
          </div>
          <div className="linkedin">
            <span className="fa"/>
            <p>linkedin.com/in/tomasz.chybzinski</p>
          </div>
          <div className="gmail">
            <span className="fa"/>
            <p>tomasz.chybzinski@gmail.com</p>
          </div>
          <div className="phone">
            <span className="fa"/>
            <p>726 058 959</p>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default SocialMediaLayer;