import React, { Component } from 'react';
import './App.scss';
import TransitionLayer from "../HomePage/TransitionLayer/TransitionLayer";
import VideoLayer from "../HomePage/VideoLayer/VideoLayer";
import WelcomeLayer from "../HomePage/WelcomeLayer/WelcomeLayer";
import TechnologyLayer from "../HomePage/TechnologyLayer/TechnologyLayer";
import SocialMediaLayer from "../HomePage/SocialMediaLayer/SocialMediaLayer";
import ContactFormLayerContainer from '../HomePage/ContactFormLayer/ContactFormLayerContainer';
import HeaderContainer from '../Navbar/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <WelcomeLayer />
        <TransitionLayer />
        <VideoLayer />
        <TechnologyLayer />
        <SocialMediaLayer />
        <ContactFormLayerContainer />
      </div>
    )
  }
}

export default App;