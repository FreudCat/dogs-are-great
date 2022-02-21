/* eslint no-shadow: ["error", { "allow": ["synonymInfo"] }] */
/* eslint react/destructuring-assignment: [0] */
// The above eslint lines turn off or makes exceptions to eslint rules

// This component is not used, but I'm keeping it here for future reference

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import RenderSynonym from "./RenderSynonym";

const GetSynonym = (props) => {
  const [synonymInfo, setSynonymInfo] = useState([]);
  const wordArray = props.temperamentWords.split(", ");
  // Decided not to follow eslint warning above to decrease lines of code

  const getSynonyms = () => {
    wordArray.map(async (word) => {
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
        const wordInformationFromAPI = await res.json();
        setSynonymInfo((synonymInfo) => [
          ...synonymInfo,
          wordInformationFromAPI[0].word,
        ]);
      } catch (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    getSynonyms();
  }, []);

  return (
    <div>
      {synonymInfo.length === wordArray.length && (
        <RenderSynonym synonymArray={synonymInfo} />
      )}
    </div>
  );
};

GetSynonym.propTypes = {
  temperamentWords: PropTypes.string,
};

export default GetSynonym;
