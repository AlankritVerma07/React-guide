import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'am React App!</h1>
        <Person name="Max M">Hobbies:Playien</Person>
        <Person name="Mike" />
        <Person name="Sam" />
      </div>
    );
  }
}

export default App;
