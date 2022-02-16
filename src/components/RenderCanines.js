import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardHeader, CardText, Accordion, AccordionItem, AccordionHeader, AccordionBody, UncontrolledCollapse, Collapse } from "reactstrap";

const imagePath = "https://cdn2.thedogapi.com/images/";

export default class RenderCanines extends Component {
  constructor(props) {
    super(props);
    this.state = { synonymInfo: [], col: 0, cardItems: [1, 2, 3, 4]};
    this.tempArray = [];
    this.canineImageID = this.props.canineInfo.reference_image_id;
    this.addErrorSrc = this.addErrorSrc.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle = (e) => {
    let event = e.target.dataset.event;
    this.setState({
      col: this.state.col === Number(event) ? 0 : Number(event),
    });
  }
  addErrorSrc(event){
    event.target.src =`${imagePath}${this.props.canineInfo.reference_image_id}.png`
  }

  render() {
   return(
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
                alt={this.props.canineInfo.name}/>
              </div>
            </Col>
            <Col>
              <Card>
                <CardHeader onClick={this.toggle} data-event={1}>Historical Job</CardHeader>
                <Collapse isOpen={this.state.col === 1}>
                <CardBody>{this.props.canineInfo.bred_for}</CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader onClick={this.toggle} data-event={2}>Height and Weight</CardHeader>
                <Collapse isOpen={this.state.col === 2}>
                <CardBody>{this.props.canineInfo.height.imperial}
                {this.props.canineInfo.weight.imperial}</CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader onClick={this.toggle} data-event={3}>Life Span</CardHeader>
                <Collapse isOpen={this.state.col === 3}>
                <CardBody>{this.props.canineInfo.life_span}</CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader onClick={this.toggle} data-event={4}>Temperament</CardHeader>
                <Collapse isOpen={this.state.col === 4}>
                <CardBody>{this.props.canineInfo.temperament}</CardBody>
                </Collapse>
              </Card>
            </Col>
  </CardBody>
  </Card>
  </Col>
  </Row>
    
    );
  }
}


