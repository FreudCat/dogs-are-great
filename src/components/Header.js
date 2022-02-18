import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";

const Header = (props) => {
  const { headerText } = props; // deconstructuring an object

  return (
    <Row className="g-0">
      <Col xs={12} className="g-0">
        <header className="App-header pt-4 text-center">
          <h1>{headerText}</h1>
        </header>
      </Col>
    </Row>
  );
};

Header.propTypes = {
  headerText: PropTypes.string,
};

export default Header;
