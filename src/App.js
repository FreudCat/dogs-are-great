import React, { useState } from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import CanineForm from "./components/CanineForm";
import RenderCanines from "./components/RenderCanines";
import GetSynonym from "./components/GetSynonym";
import InitialBackground from "./components/InitialBackground";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const canineAPI = process.env.REACT_APP_CANINE_API_KEY;
  const [selectedBreed, setSelectedBreed] = useState("");
  const [canineInfo, setCanineInfo] = useState([]);

  // this event is updated based on the Choosecanineform component (see the render)
  const handleChangeInApp = (event) => {
    setSelectedBreed(event);
  };

  // This event is called based on a submission in the Choosecanineform component (see the render)
  const callCanineAPI = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${selectedBreed}`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineInformationFromAPI = await res.json();
      setCanineInfo(canineInformationFromAPI);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid className="g-0">
      <Header headerText="Dogs of Skyrim and Fallout" />
      {/* The functions are sent over to the ChooseCanineForm to be collected as props */}
      <CanineForm
        callCanineAPI={callCanineAPI}
        handleChangeInApp={handleChangeInApp}
      />
      {canineInfo.length === 0 && <InitialBackground />}
      {canineInfo.length !== 0 &&
        canineInfo.map((canine) => (
          <RenderCanines key={canine.id} canineInfo={canine} />
        ))}
      {canineInfo.length !== 0 &&
        canineInfo.map((canine) => (
          <GetSynonym key={canine.id} temperamentWords={canine.temperament} />
        ))}
      {canineInfo.length === 0 && <Footer />}
    </Container>
  );
};

export default App;
