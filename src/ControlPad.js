import React, { Component } from "react";

export default class ControlPad extends Component {
  render() {
    return (
      <div className="controlPad">
        <select className="dropdown">
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
      </div>
    );
  }
}
