import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import errorImage from "./../images/errImage.jpg";

export const GetRandomImage = (props) => {
  const [tempImage, setTempImage] = useState("");
  const [canineImage, setCanineImage] = useState("");
  const [altMessage, setAltMessage] = useState("");
  const canineAPI = process.env.REACT_APP_CANINE_API_KEY;
  const { canineName, canineImageID } = props;
  const tempNameArray = canineName.toLowerCase().split(" ");

  // This useEffect acts like the componentDidMount. Need to add another function inside to utilize async/await. Then call the function below. Added the empty dependency array at the very end so that the useEffect is only called once during the first render, and no everytime this page is re-rendered with the "get random image" button
  useEffect(() => {
    fetchInitialImage();
  }, []);

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

  const getRandomImage = () => {
    let reformedArray = [];
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
    console.log(reformedArray);
    try {
      reformedArray.map(async (reformedName) => {
        console.log(reformedName);
        const res = await fetch(
          `https://dog.ceo/api/breed/${reformedName}/images/random`
        );
        const images = await res.json(); //This sets the info from the api call into an object
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
    setCanineImage(tempImage ? tempImage : `${errorImage}`);
  }, [tempImage]);

  return (
    <div>
      <img className="w-100 mb-2" src={canineImage} alt={altMessage} />
      <Button className="w-75" color="primary" onClick={getRandomImage}>
        Get another {canineName} image{" "}
      </Button>
    </div>
  );
};
