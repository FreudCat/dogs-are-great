import React, { Component } from "react";
import { Row, Col } from "reactstrap";


export default class InitialBackground extends Component {
  render() {
    return (
      <Row className="g-0 m-0 p-0">
        <Col xs={12} >
          <div className="w-100 main-background-image"></div>
        </Col>
      </Row>
    )
  }
}