import React, { Component } from 'react';
import './App.scss';
import TransitionLayer from "../HomePage/TransitionLayer/TransitionLayer";
import VideoLayer from "../HomePage/VideoLayer/VideoLayer";
import TechnologyLayer from "../HomePage/TechnologyLayer/TechnologyLayer";
import SocialMediaLayer from "../HomePage/SocialMediaLayer/SocialMediaLayer";
import ContactFormLayerContainer from '../HomePage/ContactFormLayer/ContactFormLayerContainer';
import HeaderContainer from '../Navbar/HeaderContainer';
import WelcomeLayerContainer from '../HomePage/WelcomeLayer/WelcomeLayerContainer';

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