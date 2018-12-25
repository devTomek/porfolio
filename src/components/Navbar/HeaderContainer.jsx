import React, { Component } from 'react';
import Header from './Header';

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.text = {
      brand: "TC",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    }
  }

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  })

  render() {
    return (
      <Header toggle={this.toggle} isOpen={this.state.isOpen} text={this.text} />
    );
  }
}

export default HeaderContainer;