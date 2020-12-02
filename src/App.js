import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Mike", age: 22 },
      { name: "Michal", age: 24 },
      { name: "Tom", age: 23 },
    ],
    otherState: "Some other value",
    showPersons: false,
  });

  const nameChanedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Jhon", age: 29 },
        { name: event.target.value, age: 32 },
        { name: "Joe", age: 42 },
      ],
    });
  };

  const togglePersonhandler = (event) => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { name: "Mike", age: 22 },
        { name: "Michal", age: 24 },
        { name: "Tom", age: 23 },
      ],
      otherState: "Some other value",
      showPersons: !doesShow,
    });
  };
  const [otherState, setOtherState] = useState({ otherState: personsState.otherState }); //more elegant way to merge states using hooks
  console.log(personsState, otherState);
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 29 },
        { name: "James", age: 32 },
        { name: "Joe", age: 42 },
      ],
      //otherState: personsState.otherState, //since useSate() replaces the older state and does not merges it
    });
  };
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person) => {
          return <Person name={person.name} age={person.age} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>I'am React App!</h1>
      <button style={style} onClick={togglePersonhandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default app;
