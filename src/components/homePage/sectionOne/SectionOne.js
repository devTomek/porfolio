import React, { Component } from 'react';
import './SectionOne.scss';

class SectionOne extends Component {
  render() {
    return (
      <div className="section-one">
        <div className="content-wrapper">
          <div className="technologies">
            <div className="flex-row first-row">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>React</p>
            </div>
            <div className="flex-row second-row">
              <p>Node</p>
              <p>Redux</p>
              <p>CSS</p>
            </div>
          </div>
          <div className="avatar-wrapper">
            <div className="avatar"/>
            <p>Tomasz Chybziński</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionOne;