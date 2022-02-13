import React, { Component } from "react";
import RenderSynonym from "./RenderSynonym";

export default class GetSynonym extends Component {
  constructor(props) {
    super(props);
    this.state = { synonymInfo: [] };
    this.tempArray = [];
    this.wordArray = this.props.temperamentWords.split(", ");
  }

  componentDidMount = async () => {
    console.log("I'm from the callSynonymAPI");
    for (let word of this.wordArray) {
      try {
        const res = await fetch(
          `https://api.datamuse.com/words?ml=${word.replaceAll("-", "")}&max=1`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const wordInformationFromAPI = await res.json(); //This sets the info from the api call into an object
        this.tempArray.push(wordInformationFromAPI);
      } catch (err) {
        console.log(err);
      }
    }
    this.setState({ synonymInfo: this.tempArray });
  };

  render() {
    return (
      <div>
        {this.state.synonymInfo.length !== 0 && (
          <RenderSynonym synonymInfo={this.state.synonymInfo} />
        )}
      </div>
    );
  }
}
