import React, { Component } from "react";

export default class ChooseCanineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    alert(`You've chosen ${this.state.value}`);

    event.prevenDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select a dog breed to learn more about: <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="wolfhoud">Irish Wolfhound</option>
            <option value="husky">Husky</option>
            <option value="shepherd">German Shepherd</option>
            <option value="rottweiler">Rottweiler</option>
            <option value="pitbull">Pit Bull</option>
            <option value="cattledog">Cattle Dog</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
