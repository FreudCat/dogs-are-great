import React, { Component } from "react";

export default class RenderSynonym extends Component {
  constructor(props) {
    super(props);
    this.synonymArray = this.props.synonymArray;
  }

  // componentDidMount = (props) => {
  //   const words = props.synonymInfo;
  //   const listItems = words.map((word) => <li>{word}</li>);
  //   console.log(listItems);
  // };

  render() {
    console.log(this.synonymArray);
    return (
      <div>
        <h3>Synonymous Temperaments</h3>
        {this.synonymArray.map((synonym) => (
          
          <p>{synonym[0].word}</p>
        ))}
      </div>
    );
  }
}
