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

  const deletePersonHandler = (personIndex) => {
    console.log(personIndex);
    const persons = personsState.persons;
    persons.splice(personIndex, 1);
    setDelState({
      persons: persons,
      otherState: "Some other value",
      showPersons: false,
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
  const [delState, setDelState] = useState({
    persons: [
      { name: "Mike", age: 22 },
      { name: "Michal", age: 24 },
      { name: "Tom", age: 23 },
    ],
    otherState: "Some other value",
    showPersons: false,
  });
  console.log(personsState, otherState, delState);
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
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          );
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
