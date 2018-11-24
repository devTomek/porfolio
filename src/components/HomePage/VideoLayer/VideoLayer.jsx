import React from 'react';
import "./VideoLayer.scss";
import manTyping from "../../../assets/manTyping.mp4";
import manTypingFrame from "../../../assets/manTypingFrame.PNG"

const VideoLayer = () =>
  <div className="video-layer">
    <video poster={manTypingFrame} autoPlay muted loop width="100%">
      <source src={manTyping}/>
      Your browser does not support the video tag.
    </video>
    <div className="text-wrapper">
      <p>This awesome videos are possible because of HTML5</p>
      <p>Check all the technologies I used to create this website below</p>
    </div>
  </div>;

export default VideoLayer;