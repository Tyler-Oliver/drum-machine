import React, { Component } from "react";

export default class Drum extends Component {
  render() {
    return (
      <div className="drum" id={this.props.keyTrigger}>
        <audio
          className="sound"
          id={this.props.drumId}
          src={this.props.drumSound}
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
