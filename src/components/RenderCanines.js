import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

const imagePath = "https://cdn2.thedogapi.com/images/";

export default class RenderCanines extends Component {
  constructor(props) {
    super(props);
    this.state = { synonymInfo: [] };
    this.tempArray = [];
    this.canineImageID = this.props.canineInfo.reference_image_id;
    this.addErrorSrc = this.addErrorSrc.bind(this);
  }

  addErrorSrc(event){
    event.target.src =`${imagePath}${this.props.canineInfo.reference_image_id}.png`
  }

  render() {
    return (
      <Row className="d-flex g-0 text-center canine-card-row">
        <Col xs={{offset: 1, size: 10}}>
      <Card className="canine-card">
        <CardBody>
            <Col xs={12}>
          <CardTitle><h2>{this.props.canineInfo.name}</h2></CardTitle>
          </Col>
        <Col xs={12}>
        <div className="dog-image-holder">
          <img className="w-100" onError={this.addErrorSrc}
            src={`${imagePath}${this.canineImageID}.jpg`}
            // TODO - make it so the pitbul has the .png extension
            // TODO - allow random images, too
            // The pit bull one is .png
            alt={this.props.canineInfo.name}
          />
          </div>
        </Col>
      
      </CardBody>
      </Card>
      </Col>
      </Row>
    );
  }
}
