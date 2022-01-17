import React from "react";
import classes from "./button.module.css";
import { Link } from "react-router-dom";
export default function Button(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        type={props.type}
        className={classes.btn}
        style={{
          background: props.color,
          borderColor: props.color,
          paddingLeft: props.padding,
          paddingRight: props.padding,
        }}
      >
        <a className={classes.content} href={props.link}>
          {props.content}
        </a>
      </button>
    </div>
  );
}
