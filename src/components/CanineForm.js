import React, { Component } from "react";
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

export default class ChooseCanineForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Wolfhound", canineInfo: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    alert("Your favorite flavor is: " + this.state.value);
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${this.state.value}`,
        {
          mode: "cors",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineInformationFromAPI = await res.json(); //This sets the info from the api call into an object
      this.setState({
        //this sets the state of the variable canineinfo - see that an empty array was created with "state" up above. It is then used below in the render.
        canineInfo: canineInformationFromAPI,
      });
      console.log(this.state.canineInfo);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="text-center">
            Select a dog breed to learn more about: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="wolfhound">Irish Wolfhound</option>
              <option value="siberian">Husky</option>
              <option value="german_shepherd">German Shepherd</option>
              <option value="rottweiler">Rottweiler</option>
              <option value="pit_bull">Pit Bull</option>
              <option value="cattle">Cattle Dog</option>
            </select>
          </label>
          <button type="submit" value="Submit" className="btn btn-warning">
            Get Canine Info
          </button>
        </form>
      </div>
    );
  }
}
