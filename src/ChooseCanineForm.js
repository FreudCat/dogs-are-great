import React, { Component } from "react";
import GetCanineAPI from "./GetCanineAPI";
import Button from "./components/Button";

export default class ChooseCanineForm extends Component {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="text-center">
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
          <Button />
        </form>
      </div>
    );
  }
}
