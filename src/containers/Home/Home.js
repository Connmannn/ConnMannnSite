import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  renderLander() {
    return (
      <div className="home__lander"> 
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
          <p>Full stack developer looking for problems to solve</p>
    </div>
      
    );
  }  

  render() {
    return (
      <div className="home">
        {this.renderLander()}
      </div>
    );
  }
}
