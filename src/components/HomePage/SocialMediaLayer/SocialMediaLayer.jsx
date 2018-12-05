import './SocialMediaLayer.scss';
import React from 'react';
import manTyping2 from '../../../assets/manTyping2.mp4';
import manTyping2Frame from '../../../assets/manTyping2Frame.PNG';
import avatar from '../../../assets/contact-avatar.jpg';

const SocialMediaLayer = () =>
  <div className="social-media-layer">
    <div className="video">
      <video poster={manTyping2Frame} autoPlay muted loop width='100%'>
        <source src={manTyping2}/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="content-wrapper">
      <div className="header">Contact</div>
      <div className="content">
        <div className="column left-side">
          <img src={avatar} alt='avatar' width='370px'/>
          <p className='name'>Tomasz Chybziński</p>
        </div>
        <div className="column right-side">
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