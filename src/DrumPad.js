import React, { Component } from "react";
import Drum from "./Drum";

export default class DrumPad extends Component {
  render() {
    let drumPad = this.props.currentObj.map((currentVal, i, drumPadArr) => {
      return (
        <div key={drumPadArr[i].id}>
          <Drum
            keyCode={drumPadArr[i].keyCode}
            keyTrigger={drumPadArr[i].keyTrigger}
            drumId={drumPadArr[i].id}
            drumSound={drumPadArr[i].url}
          />
        </div>
      );
    });
    return <div className="drumPad">{drumPad}</div>;
  }
}
