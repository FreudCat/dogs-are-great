import React, { useState, useEffect } from "react";
import { Button, Col } from "reactstrap";
import PropTypes from "prop-types";
import errorImage from "../images/errImage.jpg";

const GetRandomImage = (props) => {
  const [tempImage, setTempImage] = useState("");
  const [canineImage, setCanineImage] = useState("");
  const [altMessage, setAltMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const canineAPI = process.env.REACT_APP_CANINE_API_KEY;
  const { canineName, canineImageID } = props;
  const tempNameArray = canineName.toLowerCase().split(" ");

  const fetchInitialImage = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/images/${canineImageID}`,
        {
          method: "GET",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineImageSrc = await res.json();
      setCanineImage(
        canineImageSrc.url ? `${canineImageSrc.url}` : `${errorImage}`
      );
      setAltMessage(
        canineImageSrc.url
          ? canineName
          : "Requested image not found. Placeholder image of smiling sheltie."
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInitialImage();
  }, []);

  const getRandomImage = () => {
    setLoading(true);
    let reformedArray = [];
    // Note to future self: this api requires the path in various orders
    // Ex: wolfhound/irish or sometimes german/shepherd
    // Here, the breed is taken and reformed in different ways then mapped
    // So that various strings are tried in the api call's path
    if (tempNameArray.length > 1) {
      reformedArray.push(`${tempNameArray[1]}/${tempNameArray[0]}`);
      reformedArray.push(`${tempNameArray[2]}/${tempNameArray[1]}`);
      reformedArray.push(`${tempNameArray[1]}${tempNameArray[2]}`);
      reformedArray.push(`${tempNameArray[0]}${tempNameArray[1]}`);
      reformedArray.push(
        `${tempNameArray[1]}${tempNameArray[2]}/${tempNameArray[0]}`
      );
      reformedArray.push(`${tempNameArray[1]}`);
    } else {
      reformedArray.push(tempNameArray[0]);
    }
    try {
      reformedArray.map(async (reformedName) => {
        const res = await fetch(
          `https://dog.ceo/api/breed/${reformedName}/images/random`
        );
        const images = await res.json(); // This sets the info from the api call into an object
        if (images.status === "success") {
          setTempImage(images.message);
        }
        setAltMessage(
          tempImage
            ? canineName
            : "Requested image not found. Placeholder image of smiling sheltie."
        );
      });
    } catch (err) {
      console.log(err);
    }
    reformedArray = [];
  };

  useEffect(() => {
    setCanineImage(tempImage || `${errorImage}`);
  }, [tempImage]);

  return (
    <div>
      <div>
        <img
          className={`w-100 mb-xxl-5 mb-2  ${loading ? "preloader" : ""}`}
          src={canineImage}
          alt={altMessage}
          onLoad={() => setLoading(false)}
        />
      </div>
      <Col md={{ offset: 2, size: 8 }}>
        <Button
          className="w-75 get-random-button"
          color="primary"
          onClick={getRandomImage}
        >
          Get another {canineName} image{" "}
        </Button>
      </Col>
    </div>
  );
};

GetRandomImage.propTypes = {
  canineName: PropTypes.string,
  canineImageID: PropTypes.string,
};

export default GetRandomImage;
