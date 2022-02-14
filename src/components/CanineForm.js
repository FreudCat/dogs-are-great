import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

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
      <Row>
        {/* This onsubmit collects as props the callCanineAPI function */}
        <Form
          xs={12}
          className="canine-form d-inline-flex g-0"
          onSubmit={this.props.callCanineAPI}
        >
          <FormGroup>
            <Label for="canine-dropdown" sm={12} className="text-center">
              Select a dog breed: <br />
              {/* This value is updated when the use selects something new. Then, handleChange function is called. The handleChange function then calls two functions. One changes the text in the dropdown menu to the selected value and then the selectedBreed value is updated in Apps via props to be used in the API call */}
              <Input
                id="canine-dropdown"
                type="select"
                name="select"
                className="col-6 dropdown-form py-1 "
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="wolfhound">Irish Wolfhound</option>
                <option value="siberian">Husky</option>
                <option value="german_shepherd">German Shepherd</option>
                <option value="rottweiler">Rottweiler</option>
                <option value="pit_bull">Pit Bull</option>
                <option value="cattle">Cattle Dog</option>
              </Input>
              <Button
                style={{ backgroundColor: "#000000" }}
                className="submit-button col-2 g-0 py-1"
                type="submit"
                value="Submit"
              >
                Go
              </Button>
            </Label>
          </FormGroup>
        </Form>
      </Row>
    );
  }
}
{
  /* <button type="submit" value="Submit" className="btn btn-warning"></button>

<Button color="success">Success Color Button</Button> <br></br> */
}
