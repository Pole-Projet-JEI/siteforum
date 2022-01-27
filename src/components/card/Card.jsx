import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} className={classes.image} alt=""></img>
      </div>
      <div className={classes.aside}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
