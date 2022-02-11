import "./App.css";
import Header from "./components/Header";
import React, { Component } from "react";
import Canines from "./components/Canines";
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

class App extends Component {
  state = {
    canineInfo: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=siberian`,
        {
          mode: "cors",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineInformationFromAPI = await res.json(); //This sets the info from the api call into an object
      this.setState({
        //this sets the state of the variable canineinfo - see that an empty array was created with "state" up above. It is then used below in the render.
        canineInfo: canineInformationFromAPI,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state.canineInfo);
    return (
      <div className="container">
        <Header headerText="Dogs of Skyrim and Fallout" />
        {this.state.canineInfo.map(
          (
            canine // we are mapping through the array that was created from the api call, then sending the mapped information to the Canines component where it will be populated into the browser
          ) => (
            <Canines key={canine.id} canine={canine} />
          )
        )}

        {/* <ChooseCanineForm /> */}
      </div>
    );
  }
}

// class ChooseCanineForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "Wolfhound" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//
//   render() {
//     let results;
//     if (this.state.canine) {
//       results = this.state.canine.map((result, index) => {
//         return console.log(result.id);
//       });
//     }
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label className="text-center">
//             Select a dog breed to learn more about: <br />
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="wolfhoud">Irish Wolfhound</option>
//               <option value="husky">Husky</option>
//               <option value="shepherd">German Shepherd</option>
//               <option value="rottweiler">Rottweiler</option>
//               <option value="pitbull">Pit Bull</option>
//               <option value="cattledog">Cattle Dog</option>
//             </select>
//           </label>
//           <button type="submit" value="Submit" className="btn btn-warning">
//             Get Canine Info
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

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
