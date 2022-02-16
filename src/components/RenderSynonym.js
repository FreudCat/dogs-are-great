import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

export default class RenderSynonym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.synonymArray = this.props.synonymArray;
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log(this.synonymArray);
    return (
      <Row className="g-0">
        <Col xs={{offset: 2, size: 8}} className="mb-5">
          <Button color="primary" onClick={this.toggle}>Get Synonymous Temperaments</Button>
        </Col>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Synonyms</ModalHeader>
          <ModalBody>
          {this.synonymArray.map((synonym) => (
          <p>{synonym[0].word}</p>
        ))}
          </ModalBody>
          <ModalFooter>
            <p>Pretty great dog!</p>
          </ModalFooter>
        </Modal>
    </Row>
    );
  }
}
