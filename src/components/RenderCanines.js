import React, { Component } from "react";

const imagePath = "https://cdn2.thedogapi.com/images/";

export default class RenderCanines extends Component {
  render() {
    return (
      <div>
        <img
          src={`${imagePath}${this.props.canineInfo.reference_image_id}.jpg`}
          // TODO - make it so the pitbul has the .png extension
          // TODO - allow random images, too
          // The pit bull one is .png
          alt={this.props.canineInfo.name}
        />
        <div>{this.props.canineInfo.name}</div>
      </div>
    );
  }
}
