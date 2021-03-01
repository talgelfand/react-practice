import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class ContactsForm extends Component {
  state = {
    email: "",
    name: "",
    description: "",
    agreement: false,
  };

  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit = () => {
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("description", this.state.description);
    localStorage.setItem("agreement", this.state.agreement);
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{
          width: "400px",
          display: "block",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Enter the description"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup check>
          <Input
            required
            type="checkbox"
            name="agreement"
            id="agreement"
            onChange={this.handleChange}
          />
          <Label for="agreement" check>
            I agree to the <a href="/">Terms and Conditions</a>
          </Label>
        </FormGroup>
        <Button style={{ marginTop: "30px" }} color="info">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactsForm;
