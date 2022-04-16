import { useState, useEffect } from "react";
// import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import PropTypes from "prop-types";
// import RenderGameDog from "./RenderGameDog";

const RenderMyApi = (props) => {
  const { canineForOwnApi, getGameBreed } = props;
  const [breedInfo, setBreedInfo] = useState({});
  const noSpaceBreed = canineForOwnApi.split(" ").join("");

  const fetchMyAPI = async () => {
    try {
      const res = await fetch("data.json");
      const myAPI = await res.json();
      setBreedInfo(myAPI[noSpaceBreed]);
      // setBreedInfo(myAPI[noSpaceBreed], () => {
      //   <RenderGameDog sendDogList="This was sent" />;
      // });
      console.log(myAPI[noSpaceBreed]);
    } catch (err) {
      console.log(err);
    }
  };

  //  console.log(typeof gameBreed.specific_dog);
  //  // Loop through an object containing an array
  //  const newList = Object.entries(gameBreed.specific_dog).forEach((dog) => {
  //    // console.log(dog[1].name);
  //    <ul>
  //      <li>
  //        <span>Name: </span>
  //        {dog[1].name}
  //      </li>
  //      <li>
  //        <span>Location: </span>
  //        {dog[1].location}
  //      </li>
  //    </ul>;
  //  });
  //  setDogList(newList);

  // This calls the previously passed function and sends breedinfo back as the argument
  getGameBreed(breedInfo);

  // useEffect(() => {
  //   <RenderGameDog sendDogList="This was sent" />;
  // }, [breedInfo]);

  useEffect(() => {
    fetchMyAPI();
  }, []);
  return null;
};

RenderMyApi.propTypes = {
  canineForOwnApi: PropTypes.string,
  getGameBreed: PropTypes.func,
};

export default RenderMyApi;
