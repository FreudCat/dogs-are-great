/* eslint prefer-destructuring: ["error", {"object": false}] */
/* eslint-disable camelcase */

import React, { useState } from "react";
import { Row, Col, Card, CardBody, CardTitle, Collapse } from "reactstrap";
import PropTypes from "prop-types";
import GetRandomImage from "./GetRandomImage";
import RenderMyApi from "./RenderMyApi";
import RenderGameDog from "./RenderGameDog";

const RenderCanines = (props) => {
  const [collapseID, setCollapseID] = useState(0);
  const [gameBreed, setGameBreed] = useState("");
  const {
    canineInfo: {
      name,
      reference_image_id,
      bred_for,
      temperament,
      weight,
      height,
      life_span,
    },
  } = props;

  // This function is passed to RenderMyApi.js, it will get the info from that component
  const getGameBreed = async (event) => {
    setGameBreed(event);
  };

  const toggle = (e) => {
    const event = e.target.dataset.event;
    setCollapseID(collapseID === Number(event) ? 0 : Number(event));
  };

  return (
    <Row className="d-flex g-0 canine-card-row text-center">
      <RenderMyApi canineForOwnApi={name} getGameBreed={getGameBreed} />
      <Col xs={{ offset: 1, size: 10 }} lg={{ offset: 2, size: 8 }}>
        <Card className="canine-card">
          <CardBody>
            <Col xs={12}>
              <CardTitle>
                <h2 className="mb-md-5 canine-card-name">{name}</h2>
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
                    type="button"
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={toggle}
                    data-event={1}
                  >
                    Historical Job
                  </button>
                  <Collapse isOpen={collapseID === 1}>
                    <CardBody className="card-text">{bred_for}</CardBody>
                  </Collapse>
                </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-2">
                <Card>
                  <button
                    type="button"
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={toggle}
                    data-event={2}
                  >
                    Height and Weight
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
                    type="button"
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={toggle}
                    data-event={3}
                  >
                    Life Span
                  </button>
                  <Collapse isOpen={collapseID === 3}>
                    <CardBody className="card-text">{life_span}</CardBody>
                  </Collapse>
                </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-2">
                <Card>
                  <button
                    type="button"
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={toggle}
                    data-event={4}
                  >
                    Temperament
                  </button>
                  <Collapse isOpen={collapseID === 4}>
                    <CardBody className="card-text">{temperament}</CardBody>
                  </Collapse>
                </Card>
              </Col>
              <Col md={{ offset: 2, size: 8 }} className="mb-md-5">
                <Card>
                  <button
                    type="button"
                    className="cardDropdownHeader w-100 btn btn-outline-primary"
                    onClick={(e) => {
                      toggle(e);
                      // getList(e);
                    }}
                    // onClick={toggle}
                    data-event={5}
                  >
                    The {gameBreed.game} Version
                  </button>
                  <Collapse isOpen={collapseID === 5}>
                    <CardBody className="card-text">
                      <figure className="mb-lg-5">
                        <img
                          className="game-dog"
                          src={gameBreed.url}
                          alt={gameBreed.alt}
                        />
                        <figcaption>{gameBreed.alt}</figcaption>
                      </figure>
                      <p className="fw-bold">
                        {name}s in {gameBreed.game}
                      </p>
                      {gameBreed.game !== undefined && (
                        <RenderGameDog dogList={gameBreed} />
                      )}
                    </CardBody>
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

RenderCanines.propTypes = {
  canineInfo: PropTypes.any,
  name: PropTypes.string,
  reference_image_id: PropTypes.string,
  bred_for: PropTypes.string,
  temperament: PropTypes.string,
  weight: PropTypes.string,
  height: PropTypes.string,
  life_span: PropTypes.string,
};

export default RenderCanines;
