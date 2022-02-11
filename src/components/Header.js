import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const { headerText } = this.props; //deconstructuring an object

    return (
      <div className="App">
        <header className="App-header col-12 pt-5 text-center">
          <h1>{headerText}</h1>
        </header>
      </div>
    );
  }
}
