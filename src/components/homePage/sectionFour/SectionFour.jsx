import React from 'react';
import "./SectionFour.scss";
import html from '../../../assets/html5.svg'
import css from '../../../assets/css3.svg'
import sass from '../../../assets/sass.svg'
import js from '../../../assets/js.svg'
import react from '../../../assets/react.svg'
import reduxIcon from '../../../assets/redux.svg'

// todo position section four items

const SectionFour = () =>
  <div className="section-four">
    <div className="content-wrapper">
      <div className="column-wrapper">
        <div className="html-wrapper">
          <img src={html}/>
          <p>New HTML5 &lt;video/&gt; tag is a great replacement of the old flash technology!</p>
        </div>
        <div className="css-wrapper">
          <img src={css}/>
          <p>CSS3 allows to create smooth and beautiful animations!</p>
        </div>
        <div className="sass-wrapper">
          <img src={sass}/>
          <p>SASS is an awesome way to write styles faster!</p>
        </div>
      </div>
      <div className="column-wrapper">
        <div className="js-wrapper">
          <img src={js}/>
          <p>JavaScript makes web more interactive and with new ES6 syntax it is a pleasure to write code!</p>
        </div>
        <div className="react-wrapper">
          <img src={react}/>
          <p>React takes JS to the higher level, thanks to virtual DOM rendering is so fast!</p>
        </div>
        <div className="redux-wrapper">
          <img src={reduxIcon}/>
          <p>Thanks to Redux the data is being passed in a cleaner way and it takes care the lifecycle methods so I
            don't have to!</p>
        </div>
      </div>
    </div>
  </div>;

export default SectionFour;