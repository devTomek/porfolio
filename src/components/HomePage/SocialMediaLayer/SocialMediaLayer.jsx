import './SocialMediaLayer.scss';
import React from 'react';
import manTyping2 from '../../../assets/manTyping2.mp4';
import manTyping2Frame from '../../../assets/manTyping2Frame.PNG';
import avatar from '../../../assets/contact-avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const link = {
  github: "https://github.com/devTomek",
  linkedIn: "https://www.linkedin.com/in/tomasz-chybzi%C5%84ski/",
  facebook: "https://www.facebook.com/tomasz.chybzinski",
  twitter: "https://twitter.com/CodeCraftIO",
  mail: "tomasz.chybzinski@gmail.com",
  phone: "726 058 959"
}

const SocialMediaLayer = () =>
  <div className="social-media-layer">
    <div className="video">
      <video poster={manTyping2Frame} autoPlay muted loop width='100%'>
        <source src={manTyping2} />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="content-wrapper">
      <div className="header">Contact</div>
      <div className="content">
        <div className="column left-side">
          <img src={avatar} alt='avatar' width='370px' />
          <p className='name'>Tomasz Chybziński</p>
        </div>
        <div className="column right-side">
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faGithub} size='5x' />
            </div>
            <a href={link.github}>devTomek</a>
          </div>
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faLinkedin} size='5x' />
            </div>
            <a href={link.linkedIn}>Tomasz Chybziński</a>
          </div>
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faFacebook} size='5x' />
            </div>
            <a href={link.facebook}>tomasz.chybzinski</a>
          </div>
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faTwitter} size='5x' />
            </div>
            <a href={link.twitter}>CodeCraftIO</a>
          </div>
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faEnvelope} size='5x' />
            </div>
            <a href={`mailto:${link.mail}`}>{link.mail}</a>
          </div>
          <div className="social-element">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faPhone} size='5x' />
            </div>
            <a href={`tel:${link.phone}`}>{link.phone}</a>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default SocialMediaLayer;