import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("Cockpit.js useEffect");
    setTimeout(() => {
      alert("Data Saved");
    }, 1000);
    return () => {
      console.log("Cockpit.js cleanUp work in useEffect"); //cleanUp in functional comp.
    };
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) assignedClasses.push(classes.red); //assignedClasses=["red"]
  if (props.personsLength <= 1) assignedClasses.push(classes.bold); //assignedClasses=["red","bold"]
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};
export default React.memo(cockpit);
