import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";

const RenderSynonym = (props) => {
  const [modal, setModal] = useState(false);
  const { synonymArray } = props;

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Row className="g-0">
      <Col
        xs={{ offset: 2, size: 8 }}
        md={{ offset: 4, size: 4 }}
        className="mb-5 pb-5"
      >
        <Button
          color="primary"
          className="w-100 get-synonym-button"
          onClick={toggle}
        >
          Get Synonymous Temperaments
        </Button>
      </Col>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Synonyms</ModalHeader>
        <ModalBody>
          {synonymArray.map((synonym) => (
            <p key={synonymArray.indexOf(synonym)}>{synonym}</p>
          ))}
        </ModalBody>
        <ModalFooter>
          <p>Pretty great dog!</p>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default RenderSynonym;
