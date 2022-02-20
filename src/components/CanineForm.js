import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, Label, Input, Row, Col } from "reactstrap";

const CanineForm = (props) => {
  const [value, setValue] = useState("wolfhound"); // Setting the state to the first option incase the user does not change the option
  const { handleChangeInApp, callCanineAPI } = props;

  useEffect(() => {
    handleChangeInApp(value);
  }, [value, handleChangeInApp]);

  return (
    <Row className="position-relative g-0">
      <Form className="col-12 canine-form" onSubmit={callCanineAPI}>
        {/* This onsubmit collects as props the callCanineAPI function */}
        <Row className="g-0">
          <Col
            xs={12}
            lg={{ offset: 1, size: 4 }}
            xl={{ offset: 1, size: 4 }}
            className="offset-lgxl-0"
          >
            <Label
              for="canine-dropdown"
              className="d-flex justify-content-center justify-content-lgxl-end mb-md-0 text-center"
            >
              Select a dog breed: &nbsp;
            </Label>
          </Col>

          {/* This value is updated when the use selects something new.
          Then, handleChange function is called. The handleChange function calls two functions.
          One changes the text in the dropdown menu to the selected value.
          Then the selectedBreed value is updated in Apps via props to be used in the API call */}

          <Col
            xs={{ offset: 1, size: 8 }}
            md={{ offset: 3, size: 4 }}
            lg={{ offset: 0, size: 4 }}
            className="d-inline-flex"
          >
            <Input
              id="canine-dropdown"
              type="select"
              name="select"
              className="dropdown-form"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option className="option-size" value="wolfhound">
                Irish Wolfhound
              </option>
              <option className="option-size" value="siberian">
                Husky
              </option>
              <option className="option-size" value="german_shepherd">
                German Shepherd
              </option>
              <option className="option-size" value="rottweiler">
                Rottweiler
              </option>
              <option className="option-size" value="pit_bull">
                Pit Bull
              </option>
              <option className="option-size" value="cattle">
                Cattle Dog
              </option>
            </Input>
          </Col>

          <Col xs={2} md={2} xl={1} className="d-inline-flex g-0">
            <Button
              className="submit-button w-100 p-0"
              type="submit"
              value="Submit"
            >
              Fetch!
            </Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

CanineForm.propTypes = {
  handleChangeInApp: PropTypes.any,
  callCanineAPI: PropTypes.any,
};

export default CanineForm;
