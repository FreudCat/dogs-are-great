import React, { Component } from "react";
import { Button, Form, Label, Input, Row, Col } from "reactstrap";

export default class ChooseCanineForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.handleChangeInApp(this.state.value);
    });
  }

  render() {
    return (
      <Row className="position-relative g-0">
        <Form 
          className="col-12 canine-form"
          onSubmit={this.props.callCanineAPI}
        >
          {/* This onsubmit collects as props the callCanineAPI function */}
          <Row className="g-0">
            <Col xs={12} lg={{offset: 1, size: 4}} xl={{offset: 1, size: 4}}className="offset-lgxl-0">
              <Label for="canine-dropdown" className="text-center d-flex justify-content-center justify-content-lgxl-end mb-md-0">
              Select a dog breed: &nbsp;
              </Label>
            </Col>
          
            {/* This value is updated when the use selects something new. Then, handleChange function is called. The handleChange function then calls two functions. One changes the text in the dropdown menu to the selected value and then the selectedBreed value is updated in Apps via props to be used in the API call */}
            <Col xs={{offset: 1, size: 8}} md={{offset: 3, size: 4}} lg={{offset: 0, size: 4}}className="d-inline-flex">
              <Input
                id="canine-dropdown"
                type="select"
                name="select"
                className="dropdown-form"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option className="option-size" value="wolfhound">Irish Wolfhound</option>
                <option className="option-size" value="siberian">Husky</option>
                <option className="option-size" value="german_shepherd">German Shepherd</option>
                <option className="option-size" value="rottweiler">Rottweiler</option>
                <option className="option-size" value="pit_bull">Pit Bull</option>
                <option className="option-size" value="cattle">Cattle Dog</option>
              </Input>
            </Col>
        
            <Col xs={2} md={2} xl={1}className="d-inline-flex g-0">
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
  }
} 
{
  /* <button type="submit" value="Submit" className="btn btn-warning"></button>

<Button color="success">Success Color Button</Button> <br></br> */
}
