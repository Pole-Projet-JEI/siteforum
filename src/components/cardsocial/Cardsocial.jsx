import React from "react";
import classes from "./Cardsocial.module.css";
import SocialMedia from "../socialmediaBox/SocialMedia";

export default function Cardsocial(props) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.sourceimg} className={classes.image} alt=""></img>
      </div>
      <div className={classes.aside}>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <SocialMedia title="CONNECT WITH ME" color="#004059" size="28px" />{" "}
      </div>
    </div>
  );
}
