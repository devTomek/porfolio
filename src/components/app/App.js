import React, { Component } from 'react';
import SectionOne from "../homePage/sectionOne/SectionOne";
import SectionTwo from "../homePage/sectionTwo/SectionTwo";
import SectionThree from "../homePage/sectionThree/SectionThree";

class App extends Component {
  render() {
    return (
      <div>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
      </div>
    )
  }
}

export default App;