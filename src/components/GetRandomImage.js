import React, { useState, useRef, useEffect } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import errorImage from "../images/errImage.jpg";

const GetRandomImage = (props) => {
  const [tempImage, setTempImage] = useState("");
  const [newTempImage, setNewTempImage] = useState([]);
  const [canineImage, setCanineImage] = useState("");
  const [altMessage, setAltMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [clearTimer, setClearTimer] = useState(false);
  const canineAPI = process.env.REACT_APP_CANINE_API_KEY;
  const { canineName, canineImageID } = props;
  const tempNameArray = canineName.toLowerCase().split(" ");

  const timerRef = useRef(null);
  const setTimer = () => {
    timerRef.current = setTimeout(() => {
      setCanineImage(errorImage);
      setAltMessage(
        "Requested image not found. Placeholder image of smiling sheltie."
      );
      setClearTimer(true);
    }, 4000);
  };

  useEffect(() => {
    setClearTimer(false);
    setLoading(false);
    console.log("i'm cleared");
    console.log(clearTimer);
    return () => clearTimeout(timerRef.current);
  }, [clearTimer === true]);

  const fetchInitialImage = async () => {
    setTimer();
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
      const canineImageFetch = await res.json();
      setTempImage(canineImageFetch.url || errorImage);
      setAltMessage(
        canineImageFetch.url
          ? canineName
          : "Requested image not found. Placeholder image of smiling sheltie."
      );
    } catch (err) {
      console.log(err);
    }
    clearTimeout(setTimer);
  };

  useEffect(() => {
    fetchInitialImage();
  }, []);

  const getRandomImage = () => {
    setTimer();
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
          setNewTempImage(images.message);
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
    setCanineImage(tempImage);
    setAltMessage(canineName);
  }, [tempImage]);

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setCanineImage(newTempImage);
      setAltMessage(canineName);
    }
  }, [newTempImage]);

  return (
    <div>
      <div className="random-image-div">
        <div className={`${loading ? "preloader" : ""}`}>
          <p
            className={`bounceball preloader-text ${
              !loading ? "make-invisible" : ""
            }`}
          >
            Loading...
          </p>
        </div>
        <img
          className="w-100 mb-xxl-5 mb-2 h-auto"
          src={canineImage}
          alt={altMessage}
          onLoad={() => {
            setLoading(false);
            setClearTimer(true);
          }}
        />
        <div className="button-in-image">
          <Button
            className={`get-random-button w-15 ${
              loading ? "make-invisible" : ""
            }`}
            color="primary"
            onClick={getRandomImage}
          >
            Get new image
          </Button>
        </div>
      </div>
    </div>
  );
};

GetRandomImage.propTypes = {
  canineName: PropTypes.string,
  canineImageID: PropTypes.string,
};

export default GetRandomImage;
