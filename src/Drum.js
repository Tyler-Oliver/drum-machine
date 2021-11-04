import React from "react";
import bankOne from "./Object";
import Key from "./Key";

export default function Drum(props) {
  return (
    <div id="drum">
      <section className="drum-row">
        <Key letter={bankOne[0]} onClick={props.onClick} />
        <Key letter="W" onClick={props.onClick} />
        <Key letter="E" onClick={props.onClick} />
      </section>
      <section className="drum-row">
        <Key letter="A" onClick={props.onClick} />
        <Key letter="S" onClick={props.onClick} />
        <Key letter="D" onClick={props.onClick} />
      </section>
      <section className="drum-row">
        <Key letter="Z" onClick={props.onClick} />
        <Key letter="X" onClick={props.onClick} />
        <Key letter="C" onClick={props.onClick} />
      </section>
    </div>
  );
}
