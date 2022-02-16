import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, CardHeader, CardText, Accordion, AccordionItem, AccordionHeader, AccordionBody, UncontrolledCollapse, Collapse } from "reactstrap";


const imagePath = "https://cdn2.thedogapi.com/images/";

export default class RenderCanines extends Component {
  constructor(props) {
    super(props);
    this.state = { synonymInfo: [], col: 0 }
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
            <Col xs={12} className="mb-3">
              <div className="dog-image-holder">
                <img className="w-100" onError={this.addErrorSrc}
                src={`${imagePath}${this.canineImageID}.jpg`}
                alt={this.props.canineInfo.name}/>
              </div>
            </Col>
            <Col>
              <Card>
                <button className="cardDropdownHeader w-100 btn btn-outline-primary" onClick={this.toggle} data-event={1}>Historical Job <i className={`fa fa-chevron-down ${this.state.col === 1 ? "rotate-chevron" : ""}`}></i></button>
                <Collapse isOpen={this.state.col === 1}>
                <CardBody>{this.props.canineInfo.bred_for}</CardBody>
                </Collapse>
              </Card>
              <Card>
              <button className="cardDropdownHeader w-100 btn btn-outline-primary" onClick={this.toggle} data-event={2}>Height and Weight <i className={`fa fa-chevron-down ${this.state.col === 2 ? "rotate-chevron" : ""}`}></i></button>
                <Collapse isOpen={this.state.col === 2}>
                <CardBody>{this.props.canineInfo.height.imperial}
                {this.props.canineInfo.weight.imperial}</CardBody>
                </Collapse>
              </Card>
              <Card>
              <button className="cardDropdownHeader w-100 btn btn-outline-primary" onClick={this.toggle} data-event={3}>Life Span <i className={`fa fa-chevron-down ${this.state.col === 3 ? "rotate-chevron" : ""}`}></i></button>
                <Collapse isOpen={this.state.col === 3}>
                <CardBody>{this.props.canineInfo.life_span}</CardBody>
                </Collapse>
              </Card>
              <Card>
              <button className="cardDropdownHeader w-100 btn btn-outline-primary" onClick={this.toggle} data-event={4}>Temperament <i className={`fa fa-chevron-down ${this.state.col === 4 ? "rotate-chevron" : ""}`}></i></button>
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


