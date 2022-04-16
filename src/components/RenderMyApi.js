import React, { useEffect } from "react";
// import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import PropTypes from "prop-types";

const RenderMyApi = (props) => {
  const { canineForOwnApi } = props;
  console.log("rendermyapiran");

  const fetchMyAPI = async () => {
    try {
      const res = await fetch("data.json");
      const myAPI = await res.json();
      console.log(myAPI.dogs[0].breed);
      console.log({ canineForOwnApi });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);
  return <p>rendermyapireturn</p>;
};

RenderMyApi.propTypes = {
  canineForOwnApi: PropTypes.string,
};

export default RenderMyApi;
