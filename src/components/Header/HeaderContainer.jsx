import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.text = {
      brand: "TC",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    };
    this.prevScroll = 0;
    this.scrolling = false;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  handleScroll = () => {
    if (!this.scrolling) {
      window.requestAnimationFrame(() => {
        this.toggleNavbar();
        this.scrolling = false;
      });

      this.scrolling = true;
    }
  };

  toggleNavbar = () => {
    const currScroll = window.scrollY;

    if (this.prevScroll < currScroll) {
      if (this.headerRef) {
        this.headerRef.style.top = "-300px";
      }
    } else {
      if (this.headerRef) {
        this.headerRef.style.top = 0;
      }
    }
    this.prevScroll = currScroll;
  };

  render() {
    return (
      <div ref={node => (this.headerRef = node)} className="header-slider">
        <Header
          toggle={this.toggle}
          isOpen={this.state.isOpen}
          text={this.text}
        />
      </div>
    );
  }
}

export default HeaderContainer;
