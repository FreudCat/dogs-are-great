import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import GetRandomImage from "./GetRandomImage";

export default class RenderCanines extends Component {
  constructor(props) {
    super(props);
    this.state = { col: 0 };
    // this.canineImageID = this.props.canineInfo.reference_image_id; example: props is not destructured
    this.toggle = this.toggle.bind(this);
  }

  toggle = (e) => {
    let event = e.target.dataset.event;
    this.setState({
      col: this.state.col === Number(event) ? 0 : Number(event),
    });
  };

  render() {
    const {
      name,
      reference_image_id,
      bred_for,
      temperament,
      weight,
      height,
      life_span,
    } = this.props.canineInfo;
    console.log(weight);
    return (
      <Row className="d-flex g-0 canine-card-row text-center">
        <Col xs={{ offset: 1, size: 10 }}>
          <Card className="canine-card">
            <CardBody>
              <Col xs={12}>
                <CardTitle>
                  <h2>{name}</h2>
                </CardTitle>
              </Col>
              <Col xs={12} className="mb-3">
                <GetRandomImage
                  canineName={name}
                  canineImageID={reference_image_id}
                />
              </Col>
              <Col>
                <Card>
                  <button
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={this.toggle}
                    data-event={1}
                  >
                    Historical Job{" "}
                    <i
                      className={`fa fa-chevron-down ${
                        this.state.col === 1 ? "rotate-chevron" : ""
                      }`}
                    ></i>
                  </button>
                  <Collapse isOpen={this.state.col === 1}>
                    <CardBody>{bred_for}</CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <button
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={this.toggle}
                    data-event={2}
                  >
                    Height and Weight{" "}
                    <i
                      className={`fa fa-chevron-down ${
                        this.state.col === 2 ? "rotate-chevron" : ""
                      }`}
                    ></i>
                  </button>
                  <Collapse isOpen={this.state.col === 2}>
                    <CardBody>
                      Height: {height.imperial} inches <br />
                      Weight: {weight.imperial} pounds
                    </CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <button
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={this.toggle}
                    data-event={3}
                  >
                    Life Span{" "}
                    <i
                      className={`fa fa-chevron-down ${
                        this.state.col === 3 ? "rotate-chevron" : ""
                      }`}
                    ></i>
                  </button>
                  <Collapse isOpen={this.state.col === 3}>
                    <CardBody>{life_span}</CardBody>
                  </Collapse>
                </Card>
                <Card>
                  <button
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={this.toggle}
                    data-event={4}
                  >
                    Temperament{" "}
                    <i
                      className={`fa fa-chevron-down ${
                        this.state.col === 4 ? "rotate-chevron" : ""
                      }`}
                    ></i>
                  </button>
                  <Collapse isOpen={this.state.col === 4}>
                    <CardBody>{temperament}</CardBody>
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
