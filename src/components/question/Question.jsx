import React from 'react'
import classes from './question.module.css';

export default function Question(props) {
  return (
    <div className={classes.box}>
      <h2 className={classes.question}>{props.question}</h2>
      <span className={classes.plus}>+</span>
      
    </div>
  )
}
