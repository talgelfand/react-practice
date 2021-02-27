import React, { Component } from "react";
import axios from "axios";
import User from "../User";

export default class RandomUser extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ persons: res.data });
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <User
        name={this.state.users.name}
        email={this.state.users.email}
        phone={this.state.users.phone}
      />
    );
  }
}
