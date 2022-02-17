import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import { GetRandomImage } from "./GetRandomImage";

export const RenderCanines = (props) => {
  const [collapseID, setCollapseID] = useState(0);
  const {
    name,
    reference_image_id,
    bred_for,
    temperament,
    weight,
    height,
    life_span,
  } = props.canineInfo;

  const toggle = (e) => {
    let event = e.target.dataset.event;
    setCollapseID(collapseID === Number(event) ? 0 : Number(event));
  };

  console.log(weight);
  return (
    <Row className="d-flex g-0 canine-card-row text-center">
      <Col xs={{ offset: 1, size: 10 }} lg={{offset: 2, size: 8}}>
        <Card className="canine-card">
          <CardBody>
            <Col xs={12}>
              <CardTitle>
                <h2 className="canine-card-name">{name}</h2>
              </CardTitle>
            </Col>
            <Col xs={12} className="mb-3">
              <GetRandomImage
                canineName={name}
                canineImageID={reference_image_id}
              />
            </Col>
            <Col>
              <Col md={{ offset: 2, size: 8 }} className="mt-md-5 mb-md-2">
                <Card>
                  <button
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={toggle}
                    data-event={1}
                  >
                    Historical Job
                    <i
                      className={`fa fa-chevron-down ${
                        collapseID === 1 ? "rotate-chevron" : ""
                      }`}
                    ></i>
                  </button>
                  <Collapse isOpen={collapseID === 1}>
                    <CardBody className="card-text">{bred_for}</CardBody>
                  </Collapse>
                </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-2">
              <Card>
                <button
                  className="cardDropdownHeader w-100 btn btn-outline-primary"
                  onClick={toggle}
                  data-event={2}
                >
                  Height and Weight
                  <i
                    className={`fa fa-chevron-down ${
                      collapseID === 2 ? "rotate-chevron" : ""
                    }`}
                  ></i>
                </button>
                <Collapse isOpen={collapseID === 2}>
                  <CardBody className="card-text">
                    Height: {height.imperial} inches <br />
                    Weight: {weight.imperial} pounds
                  </CardBody>
                </Collapse>
              </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-2">
              <Card>
                <button
                  className="cardDropdownHeader w-100 btn btn-outline-primary"
                  onClick={toggle}
                  data-event={3}
                >
                  Life Span
                  <i
                    className={`fa fa-chevron-down ${
                      collapseID === 3 ? "rotate-chevron" : ""
                    }`}
                  ></i>
                </button>
                <Collapse isOpen={collapseID === 3}>
                  <CardBody className="card-text">{life_span}</CardBody>
                </Collapse>
              </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-5">
              <Card>
                <button
                  className="cardDropdownHeader w-100 btn btn-outline-primary"
                  onClick={toggle}
                  data-event={4}
                >
                  Temperament
                  <i
                    className={`fa fa-chevron-down ${
                      collapseID === 4 ? "rotate-chevron" : ""
                    }`}
                  ></i>
                </button>
                <Collapse isOpen={collapseID === 4}>
                  <CardBody className="card-text">{temperament}</CardBody>
                </Collapse>
              </Card>
              </Col>
            </Col>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
