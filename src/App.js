import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import Canines from "./components/Canines";
import ChooseCanineForm from "./components/CanineForm";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header headerText="Dogs of Skyrim and Fallout" />
        <ChooseCanineForm />
        {/* <ChooseCanineForm /> */}
      </div>
    );
  }
}

// class GetAPI extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.canineData}</h1>
//       </div>
//     );
//   }
// }

export default App;
