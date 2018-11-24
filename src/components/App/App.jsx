import React, { Component } from 'react';
import './App.scss';
import TransitionLayer from "../HomePage/TransitionLayer/TransitionLayer";
import VideoLayer from "../HomePage/VideoLayer/VideoLayer";
import WelcomeLayer from "../HomePage/WelcomeLayer/WelcomeLayer";
import TechnologyLayer from "../HomePage/TechnologyLayer/TechnologyLayer";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <WelcomeLayer/>
        <TransitionLayer/>
        <VideoLayer/>
        <TechnologyLayer/>
      </React.StrictMode>
    )
  }
}

export default App;