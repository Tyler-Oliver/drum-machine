import React, { Component } from "react";
import DrumPad from "./DrumPad";
import objOne from "./Object";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentObj: objOne
    };
    //this.handlechange = this.handlechange.bind(this)
  }

  //define event listeners
  playSound(e) {}

  //render
  render() {
    return (
      <div className="App">
        <DrumPad currentObj={this.state.currentObj} />
      </div>
    );
  }
}
