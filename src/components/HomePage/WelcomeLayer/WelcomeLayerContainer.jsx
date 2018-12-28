import React, { Component } from 'react';
import WelcomeLayer from './WelcomeLayer';

class WelcomeLayerContainer extends Component {
  constructor() {
    super();

    this.state = {
      i: 0
    };

    this.text = {
      author: 'Tomasz Chybziński',
      hello: 'Hello!',
      JSDev: 'I am a JavaScript Developer',
      create: "I do"
    };
    this.dynamicText = ['Websites', 'Web Apps', 'Node', 'React', 'Redux'];
  }

  componentDidMount() {
    this.toggleDynamicText();
    this.$dynamicText = document.querySelector(`.dynamic-text`);
  }

  toggleDynamicText = () => setInterval(() => {
    let { i } = this.state;
    const dynamicTextLength = this.dynamicText.length - 1;

    this.$dynamicText.style.opacity = 1;
    setTimeout(() => {
      this.$dynamicText.style.opacity = 0;
    }, 1700)

    if (i < dynamicTextLength) {
      this.setState({
        i: i + 1
      });
    } else {
      this.setState({
        i: 0
      })
    }
  }, 2000);

  render() {
    let { i } = this.state;

    return (
      <WelcomeLayer text={this.text} dynamicText={this.dynamicText[i]} />
    );
  }
}

export default WelcomeLayerContainer;