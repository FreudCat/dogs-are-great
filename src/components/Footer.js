import React, { useState } from "react";
import { Button, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Row className="g-0 footer-row">
      <Col
        xs={{ offset: 4, size: 4 }}
        lg={{ offset: 5, size: 2 }}
        className="mt-md-4 pb-md-5 mb-lgxl-2 mb-4 mt-2"
      >
        <Button className="w-100 abstract-modal-button" onClick={toggle}>
          Abstract
        </Button>
      </Col>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Hi there!</ModalHeader>
        <ModalBody>
          This app utilizes create-react-app to provide users with images of and
          information about dogs found in Skyrim and Fallout. <br />
          <br />
          React hooks are used to make asynchronous API calls, render
          information, and pass data between components. <br />
          <br />I use Bootstrap's React component library to style the app.
        </ModalBody>
      </Modal>
    </Row>
  );
};

export default Footer;
