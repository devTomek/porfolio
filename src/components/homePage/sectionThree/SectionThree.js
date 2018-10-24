import React, { Component } from 'react';
import "./SectionThree.scss";

class SectionThree extends Component {
  render() {
    return (
      <div className="section-three">
        {/*todo probably wrong PNG*/}
        <video poster="../../../assets/manTypingFrame.PNG" autoPlay muted loop>
          {/*todo wrong src*/}
          <source src="../../../assets/manTyping.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <p>This awesome videos are possible because of HTML5</p>
        <p>Check all the technologies I used to create this website below</p>
      </div>
    )
  }
}

export default SectionThree;