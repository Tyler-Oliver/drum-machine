import React, { Component } from "react";

export default class Drum extends Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    console.log(e.keyCode);
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    if (this.props.power) {
      document.getElementById(this.props.soundId).play();
      this.props.updateDisplay(this.props.soundId.replace(/-/g, " "));
    }
  }

  render() {
    return (
      <div className="drum" id={this.props.keyTrigger} onClick={this.playSound}>
        <audio
          className="sound"
          id={this.props.soundId}
          src={this.props.sound}
        />
        {this.props.keyTrigger}
      </div>
    );
  }
  //this.handleChange=this.handleChange.bind(this)

  //add event listeners

  //render
  //return
}
