// import React, { Component } from "react";
// import SynonymAPI from "./GetSynonym";

// const imagePath = "https://cdn2.thedogapi.com/images/";

// export default class Canines extends Component {
//   state = {
//     canineInfo: [],
//   };

//   componentDidMount = async () => {
//     try {
//       const res = await fetch(
//         `https://api.thedogapi.com/v1/breeds/search?q=${this.props.breed}`
//         // {
//         //   mode: "cors",
//         //   headers: {
//         //     "x-api-key": canineAPI,
//         //   },
//         // }
//       );
//       const canineInformationFromAPI = await res.json(); //This sets the info from the api call into an object
//       if (this.mounted) {
//         this.setState({
//           canineInfo: canineInformationFromAPI,
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // const content = isLoading ? <div>loading...</div> : <div>data...</div>;

//   // return <div>{content};</div>;
//   // render() {
//   //   return this.state.canineInfo.length !== 0 ? (
//   //     <SynonymAPI data={this.state.canineInfo} />
//   //   ) : (
//   //     <div>console.log("Not loaded");</div>
//   //   );
//   // }
// }
