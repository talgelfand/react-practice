import React, { Component } from "react";
import axios from "axios";
import { Spinner } from "reactstrap";
import Person from "../Person";

class People extends Component {
  state = {
    persons: [],
    isLoading: true,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ persons: res.data });
      console.log(this.state.persons);
      this.setState({ isLoading: false });
    });
  }

  render() {
    return this.state.isLoading ? (
      <div
        style={{
          position: "relative",
          left: "-50%",
          transform: "translateX(50%)",
        }}
      >
        <Spinner color="info" />
      </div>
    ) : (
      this.state.persons.map((item) => (
        <Person
          key={item.id}
          name={item.name}
          email={item.email}
          website={item.website}
        />
      ))
    );
  }
}

export default People;
