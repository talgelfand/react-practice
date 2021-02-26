import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function ContactsForm() {
  return (
    <Form
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
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter the description"
        />
      </FormGroup>

      <FormGroup check>
        <Input required type="checkbox" name="agreement" id="agreement" />
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

export default ContactsForm;
