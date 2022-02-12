import React, { Component } from "react";

export default class SynonymAPI extends Component {
  render() {
    const temperament = this.props.canineAway.map(
      (canine) => canine.temperament
    );
    //   let text = "How are you doing today?";
    // const myArray = text.split(" ");
    console.log("temperament[0]");

    return <div>{this.props.canineAway.name}</div>;
  }
}

// https://api.datamuse.com/words?ml=ringing+in+the+ears
