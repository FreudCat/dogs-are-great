/* eslint-disable camelcase */
/* eslint arrow-body-style: ["error", "as-needed"] */

import React from "react";
import PropTypes from "prop-types";

const RenderGameDog = (props) => {
  const {
    dogList: { specific_dog },
  } = props;
  return (
    <div>
      {specific_dog.map((dog) => (
        <div className="game-dog-text">
          <p className="mb-0">
            <span className="fw-bold">Name: </span>
            {dog.name}
          </p>
          <p>
            <span className="fw-bold">Location: </span>
            {dog.location}
          </p>
        </div>
      ))}
    </div>
  );
};

RenderGameDog.propTypes = {
  dogList: PropTypes.any,
  specific_dog: PropTypes.any,
};

export default RenderGameDog;
