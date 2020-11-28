import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsSState] = useState({
    persons: [
      { name: "Mike", age: 22 },
      { name: "Michal", age: 24 },
      { name: "Tom", age: 23 },
    ],
    otherState: "Some other value",
  });
  console.log(personsState);
  const switchNameHandler = () => {
    setPersonsSState({
      persons: [
        { name: "Sam", age: 29 },
        { name: "James", age: 32 },
        { name: "Joe", age: 42 },
      ],
      otherState: personsState.otherState, //since useSate() replaces the older state and does not merges it
    });
  };
  return (
    <div className="App">
      <h1>I'am React App!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        Hobbies:Playien
      </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default app;
