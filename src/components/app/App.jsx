import React, { Component } from 'react';
import './App.scss';
import SectionTwo from "../homePage/sectionTwo/SectionTwo";
import SectionThree from "../homePage/sectionThree/SectionThree";
import SectionOne from "../homePage/sectionOne/SectionOne";
import SectionFour from "../homePage/sectionFour/SectionFour";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
      </React.StrictMode>
    )
  }
}

export default App;