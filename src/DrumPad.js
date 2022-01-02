import React, { Component } from "react";
import Drum from "./Drum";

export default class DrumPad extends Component {
  render() {
    let drumPad = this.props.currentObj.map((currentVal, i, drumPadArr) => {
      return (
        <div className="drum" key={drumPadArr[i].id}>
          <Drum
            keyCode={drumPadArr[i].keyCode}
            keyTrigger={drumPadArr[i].keyTrigger}
            soundId={drumPadArr[i].id}
            sound={drumPadArr[i].url}
            power={this.props.power}
            updateDisplay={this.props.updateDisplay}
          />
        </div>
      );
    });
    return <div id="drum-pad">{drumPad}</div>;
  }
}
