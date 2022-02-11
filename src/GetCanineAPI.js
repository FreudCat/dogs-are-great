import React, { Component } from "react";
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

export default class GetCanineAPI extends Component {
  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.thedogapi.com/v1/breeds/search?q=husky",
        {
          mode: "cors",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canine = await res.json();
      console.log(canine);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return <div>Here comes JSX !</div>;
  }
}
