import React, { Component } from "react";
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

const imagePath = "https://cdn2.thedogapi.com/images/";

export default class Canines extends Component {
  state = {
    canineInfo: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=siberian`,
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
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.props.canineBreed);
    return (
      <div>
        {this.state.canineInfo.map((canine) => (
          <div>{canine.name}</div>
        ))}
      
        {/* <img
          src={`${imagePath}${this.state.canine.reference_image_id}.jpg`}
          alt={`${this.sstate.canine.name}`}
        />
        <h1>{this.state.canine.name}</h1> */}
      </div>
    );
  }
}
