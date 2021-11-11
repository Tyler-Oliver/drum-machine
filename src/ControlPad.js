import React, { Component } from "react";
import { objTwo } from "./Object";

export default class ControlPad extends Component {
  constructor(props) {
    super(props);

    this.objSwitch = this.objSwitch.bind(this);
  }

  render() {
    return (
      <div className="controlPad">
        <label className="switch" onClick={this.objSwitch}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}
