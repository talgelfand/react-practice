import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import "./Person.scss";

class Person extends Component {
  render() {
    return (
      <div className="person">
        <Card>
          <CardBody>
            <CardTitle style={{ fontWeight: "bold" }}>
              {this.props.name}
            </CardTitle>
            <CardSubtitle>{this.props.email}</CardSubtitle>
            <CardText>
              <a href="/">{this.props.website}</a>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Person;
