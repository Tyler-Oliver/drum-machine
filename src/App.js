import React, { Component } from "react";
import Drum from "./Drum";
import "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.handlechange = this.handlechange.bind(this)
  }

  //define event listeners
  playSound(e) {}
  //render
  render() {
    return (
      <div className="App">
        <Drum onClick={this.playSound} />
      </div>
    );
  }
}
