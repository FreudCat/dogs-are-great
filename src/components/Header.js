import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class Header extends Component {
  render() {
    const { headerText } = this.props; //deconstructuring an object

    return (
      <Row className="g-0">
        <Col xs={12} className="g-0">
          <header className="App-header pt-4 text-center">
            <h1>{headerText}</h1>
          </header>
        </Col>
      </Row>
    );
  }
}
