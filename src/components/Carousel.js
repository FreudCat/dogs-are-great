import React, { Component } from "react";
import {
 Button
} from 'reactstrap';
import errorImage from "./../images/errImage.jpg"
const canineAPI = process.env.REACT_APP_CANINE_API_KEY;

export default class CanineCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempImage: "",
      canineImage: "",
      altMessage: ""
    }
    this.tempNameArray = this.props.canineName.toLowerCase().split(" ");
    // this.addErrorSrc = this.addErrorSrc.bind(this);
    this.getRandomImage = this.getRandomImage.bind(this);
  }
  

  componentDidMount = async () => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/images/${this.props.canineImageID}`,
        {
          method: "GET",
          headers: {
            "x-api-key": canineAPI,
          },
        }
      );
      const canineImageSrc = await res.json();
      this.setState({canineImage: canineImageSrc.url ? `${canineImageSrc.url}` : `${errorImage}` });
      this.setState({altMessage: canineImageSrc.url ? this.props.canineName : "Image not found"});
    } catch (err) {
      console.log(err);
    }
  };

  getRandomImage = () => {
    let reformedArray = []; 
    if (this.tempNameArray.length > 1) {
      reformedArray.push("hello");
      reformedArray.push((`${this.tempNameArray[1]}/${this.tempNameArray[0]}`)); 
      reformedArray.push((`${this.tempNameArray[2]}/${this.tempNameArray[1]}`));
      reformedArray.push((`${this.tempNameArray[1]}${this.tempNameArray[2]}`));
      reformedArray.push((`${this.tempNameArray[0]}${this.tempNameArray[1]}`));
      reformedArray.push((`${this.tempNameArray[1]}${this.tempNameArray[2]}/${this.tempNameArray[0]}`));
      reformedArray.push((`${this.tempNameArray[1]}`));
    } else {
      reformedArray.push(this.tempNameArray[0]);
    }
      try {
        reformedArray.map(async (item) => {
        const res = await fetch(
          `https://dog.ceo/api/breed/${item}/images/random`,
        );
      
        const images = await res.json(); //This sets the info from the api call into an object
        if (images.status === "success") { 
          this.setState({ tempImage: images.message }, () => {
            console.log(`This is my image ${(this.state.tempImage)}`);
          });
        }
        this.setState({canineImage: (this.state.tempImage) ? this.state.tempImage : `${errorImage}` });
        this.setState({altMessage: (this.state.tempImage) ? this.props.canineName : "Image not found." });
        console.log(this.state.canineImage);
      })
      } catch (err) {
        console.log(err);
      }
      reformedArray = [];
    }
  
  render() {
    return(<div>
      <img className="w-100 mb-2"
    src={this.state.canineImage}
    alt={this.props.canineName}/>
    <Button className="w-75" color="primary" onClick={this.getRandomImage}>Get another {this.props.canineName} image </Button>
   </div>);
  }
}

