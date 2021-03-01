import React, { Component } from "react";
import axios from "axios";
import Person from "../Person";

import "./RandomUser.scss";
import { Button } from "reactstrap";

class RandomUser extends Component {
  state = {
    users: [],
    isLoading: true,
    randomUser: 1,
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ users: res.data });
      console.log(this.state.users);
    });
  }

  createRandomNumber = () => {
    const randNum = Math.floor(Math.random() * 10);
    const randUser = this.state.users[randNum];
    this.setState({ randomUser: randUser });
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <div className="random">
        <h1 className="employee">Employee of the month:</h1>
        <Button color="info" onClick={this.createRandomNumber}>
          Random User
        </Button>
        {this.state.isLoading ? (
          <h2>Click to generate random user</h2>
        ) : (
          <Person
            name={this.state.randomUser.name}
            email={this.state.randomUser.email}
            website={this.state.randomUser.website}
          />
        )}
      </div>
    );
  }
}

export default RandomUser;
