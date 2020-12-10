import React, { Component } from "react";
import classes from "./App.css";
//import Radium, { StyleRoot } from "radium"; //we need StyleRoot for @mediaquries
//import styled from "styled-components";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBounary/ErrorBoundary";

/* const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`; */

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    }; //Copy of original object state

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person; //Copy of original array state

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    /* const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    }; */

    let btnClass = "";

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red); //assignedClasses=["red"]
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold); //assignedClasses=["red","bold"]
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/*<StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Persons
    </StyledButton>----> Using styled-components*/}
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {/* <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> -----> Using inline-style and Radium */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

//-----------------------------------Assignment Sol.----------------------------------

// import React, { Component } from "react";
// import "./App.css";
// import Validation from "./Validation/Validation";
// import Char from "./Char/Char";

// class App extends Component {
//   state = {
//     userInput: "",
//   };

//   inputChangedHandler = (event) => {
//     this.setState({ userInput: event.target.value });
//   };

//   deleteCharHandler = (index) => {
//     const text = this.state.userInput.split("");
//     text.splice(index, 1);
//     const updatedText = text.join("");
//     this.setState({ userInput: updatedText });
//   };

//   render() {
//     const charList = this.state.userInput.split("").map((ch, index) => {
//       return (
//         <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)} />
//       );
//     });

//     return (
//       <div className="App">
//         <ol>
//           <li>
//             Create an input field (in App component) with a change listener which outputs
//             the length of the entered text below it (e.g. in a paragraph).
//           </li>
//           <li>
//             Create a new component (ValidationComponent) which receives the text length as
//             a prop
//           </li>
//           <li>
//             Inside the ValidationComponent, either output "Text too short" or "Text long
//             enough" depending on the text length (e.g. take 5 as a minimum length)
//           </li>
//           <li>
//             Create another component ( CharComponent) and style it as an inline box (
//             display: inline-block, padding: 16px, text-align: center, margin: 16px,
//             border: 1px solid black).
//           </li>
//           <li>
//             Render a list of CharComponents where each CharComponent receives a different
//             letter of the entered text (in the initial input field) as a prop.
//           </li>
//           <li>
//             When you click a CharComponent, it should be removed from the entered text.
//           </li>
//         </ol>
//         <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
//         <hr />
//         <input
//           type="text"
//           onChange={this.inputChangedHandler}
//           value={this.state.userInput}
//         />
//         <p>{this.state.userInput}</p>
//         <Validation inputLength={this.state.userInput.length} />
//         {charList}
//       </div>
//     );
//   }
// }

// export default App;
