import React, { Component } from "react";

const imagePath = "https://cdn2.thedogapi.com/images/";

const RenderCanines = (props) => {
  return (
    <div>
      <p>{props.breedInfo[0].name}</p>
      <p>{props.breedInfo[0].height}</p>
    </div>
  );
};

export default RenderCanines;
