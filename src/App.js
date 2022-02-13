import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import ChooseCanineForm from "./components/CanineForm";
import RenderCanines from "./components/RenderCanines";
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedBreed: "wolfhound", canineInfo: [] }; // Setting the selectedBreed to the first option incase the user does not change the option
    this.handleChangeInApp = this.handleChangeInApp.bind(this);
  }

  // this event is updated based on the Choosecanineform component (see the render)
  handleChangeInApp(event) {
    this.setState({ selectedBreed: event });
  }

  // This event is called based on a submission in the Choosecanineform component (see the render)
  callCanineAPI = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${this.state.selectedBreed}`,
        {
          mode: "cors",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineInformationFromAPI = await res.json(); //This sets the info from the api call into an object
      this.setState({ canineInfo: canineInformationFromAPI });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state.canineInfo);
    return (
      <div className="container">
        <Header headerText="Dogs of Skyrim and Fallout" />
        {/* The functions are sent over to the ChooseCanineForm and where they will be collected as props */}
        <ChooseCanineForm
          callCanineAPI={this.callCanineAPI}
          handleChangeInApp={this.handleChangeInApp}
        />
        {this.state.canineInfo.length !== 0 &&
          this.state.canineInfo.map((canineInfo) => (
            <RenderCanines key={canineInfo.id} canineInfo={canineInfo} />
          ))}
      </div>
    );
  }
}

export default App;
