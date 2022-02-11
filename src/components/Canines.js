import React, { Component } from "react";

export default class Canines extends Component {
  render() {
    console.log("Hello");
    return (
      <div>
        {/* See that props is used to get info sent over through a parent component. the .name is from the array. */}
        <h1>{this.props.canine.name}</h1>
      </div>
    );
  }
}
