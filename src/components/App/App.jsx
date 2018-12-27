import React, { Component } from 'react';
import './App.scss';
import TransitionLayer from "../HomePage/TransitionLayer/TransitionLayer";
import VideoLayer from "../HomePage/VideoLayer/VideoLayer";
import TechnologyLayer from "../HomePage/TechnologyLayer/TechnologyLayer";
import SocialMediaLayer from "../HomePage/SocialMediaLayer/SocialMediaLayer";
import ContactFormLayerContainer from '../HomePage/ContactFormLayer/ContactFormLayerContainer';
import WelcomeLayerContainer from '../HomePage/WelcomeLayer/WelcomeLayerContainer';
import HeaderContainer from '../Header/HeaderContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <WelcomeLayerContainer />
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