import { useState, useEffect } from "react";
// import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import PropTypes from "prop-types";

const RenderMyApi = (props) => {
  const { canineForOwnApi, getGameBreed } = props;
  const [breedInfo, setBreedInfo] = useState({});
  const noSpaceBreed = canineForOwnApi.split(" ").join("");

  const fetchMyAPI = async () => {
    try {
      const res = await fetch("data.json");
      const myAPI = await res.json();
      setBreedInfo(myAPI[noSpaceBreed]);
      console.log(myAPI[noSpaceBreed]);
    } catch (err) {
      console.log(err);
    }
  };

  // This calls the previously passed function and sends breedinfo back as the argument
  getGameBreed(breedInfo);

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
