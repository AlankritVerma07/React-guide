import React, { Component } from "react";
import classes from "./Person.css";
//import Radium from "radium";
//import styled from "styled-components";

/* const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid rgb(49, 49, 49);
  box-shadow: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`; */

class Person extends Component {
  render() {
    console.log("Person.js rendering...");
    // const person = (props) => {
    // const style = {
    //   "@media (min-width:500px)": {
    //     width: "450px",
    //   },
    // };
    // const rnd = Math.random();
    // if (rnd > 0.7) throw new Error("Something went wrong..");
    return (
      //<div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
