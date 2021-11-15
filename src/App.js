import React, { Component } from "react";
import DrumPad from "./DrumPad";
import { objOne, objTwo } from "./Object";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentObj: objOne,
      currentObjId: "Heater-kit"
    };
    this.objSwitch = this.objSwitch.bind(this);
    this.pwrSwitch = this.pwrSwitch.bind(this);
    this.displaySoundName = this.displaySoundName.bind(this);
    //this.handlechange = this.handlechange.bind(this)
  }

  //define event listeners
  objSwitch() {
    if (this.state.currentObj === objOne) {
      this.setState({
        currentObj: objTwo
      });
    } else {
      this.setState({
        currentObj: objOne
      });
    }
  }

  pwrSwitch() {
    this.setState({
      power: !this.state.power
    });
  }

  displaySoundName(name) {
    if (this.state.power) {
      this.setState({
        display: name
      });
    }
  }

  //render
  render() {
    console.log(this.state.power);
    return (
      <div className="App">
        <DrumPad
          currentObj={this.state.currentObj}
          power={this.state.power}
          updateDisplay={this.displaySoundName}
        />

        <div className="controlPad">
          <div className="objSwitch">
            <p>objSwitch</p>
            <label className="switch" onChange={this.objSwitch}>
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="pwrSwitch">
            <p>pwrSwitch</p>
            <label className="switch" onChange={this.pwrSwitch}>
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="display">
            <p>{this.state.display}</p>
          </div>
        </div>
      </div>
    );
  }
}
