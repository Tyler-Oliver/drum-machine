import React, { Component } from "react";
import DrumPad from "./DrumPad";
import { objOne, objTwo } from "./Object";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentObj: objOne,
      currentObjId: "Heater-kit"
    };
    this.objSwitch = this.objSwitch.bind(this);
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

  //render
  render() {
    console.log(this.state.currentObj);
    return (
      <div className="App">
        <DrumPad currentObj={this.state.currentObj} />
        <div className="controlPad">
          <label className="switch" onChange={this.objSwitch}>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    );
  }
}
