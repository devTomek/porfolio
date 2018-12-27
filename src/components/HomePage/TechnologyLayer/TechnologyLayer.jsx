import React from 'react';
import "./TechnologyLayer.scss";
import html from '../../../assets/html5.svg'
import css from '../../../assets/css3.svg'
import sass from '../../../assets/sass.svg'
import js from '../../../assets/js.svg'
import react from '../../../assets/react.svg'
import reduxIcon from '../../../assets/redux.svg'

const TechnologyLayer = () =>
  <div className="technology-layer">
    <div className="content-wrapper">
      <div className="column-wrapper">
        <div className="technology-wrapper html">
          <span className="image">
            <img src={html} alt="html.svg" />
          </span>
          <p>New HTML5 &lt;video/&gt; tag is a great replacement of the old flash technology!</p>
        </div>
        <div className="technology-wrapper css">
          <span className="image">
            <img src={css} alt="css.svg" />
          </span>
          <p>CSS3 allows to create beautiful styles but do not forget that CSS can do smooth animations also!</p>
        </div>
        <div className="technology-wrapper sass">
          <span className="image">
            <img src={sass} alt="sass.svg" />
          </span>
          <p>SASS is an awesome CSS preprocessor that allows to write styles better and faster!</p>
        </div>
      </div>
      <div className="column-wrapper column-two">
        <div className="technology-wrapper js">
          <p>JavaScript makes web more interactive. With new ES6 syntax it's a pleasure to write code!</p>
          <span className="image">
            <img src={js} alt="js.svg" />
          </span>
        </div>
        <div className="technology-wrapper react">
          <p>React takes JS to the higher level, thanks to virtual DOM rendering is so fast!</p>
          <span className="image">
            <img src={react} alt="react.svg" />
          </span>
        </div>
        <div className="technology-wrapper redux">
          <p>Thanks to Redux the data is being passed in a more efficient and cleaner way!</p>
          <span className="image">
            <img src={reduxIcon} alt="redux.svg" />
          </span>
        </div>
      </div>
    </div>
  </div>;

export default TechnologyLayer;