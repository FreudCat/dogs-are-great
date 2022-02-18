import React, { useState, useEffect } from "react";
import RenderSynonym from "./RenderSynonym";

const GetSynonym = (props) => {
  const [synonymInfo, setSynonymInfo] = useState([]);
  const wordArray = props.temperamentWords.split(", ");

  useEffect(() => {
    getSynonyms();
  }, []);

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
        const wordInformationFromAPI = await res.json(); //This sets the info from the api call into an object
        setSynonymInfo((synonymInfo) => [
          ...synonymInfo,
          wordInformationFromAPI[0].word,
        ]);
      } catch (err) {
        console.log(err);
      }
    });
    // setSynonymInfo((synonymInfo) => [...synonymInfo, tempArray]);
  };

  return (
    <div>
      {synonymInfo.length === wordArray.length && (
        <RenderSynonym synonymArray={synonymInfo} />
      )}
    </div>
  );
};

export default GetSynonym;
