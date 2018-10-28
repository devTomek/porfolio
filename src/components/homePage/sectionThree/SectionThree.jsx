import React, { Component } from 'react';
import "./SectionThree.scss";
import manTyping from "../../../assets/manTyping.mp4";
import manTypingFrame from "../../../assets/manTypingFrame.PNG"

class SectionThree extends Component {
  render() {
    return (
      <div className="section-three">
        <video poster={manTypingFrame} autoPlay muted loop>
          <source src={manTyping}/>
          Your browser does not support the video tag.
        </video>
        <p>This awesome videos are possible because of HTML5</p>
        <p>Check all the technologies I used to create this website below</p>
      </div>
    )
  }
}

export default SectionThree;