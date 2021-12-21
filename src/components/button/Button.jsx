import React from 'react'
import classes from './button.module.css';
import { Link } from 'react-router-dom';
export default function Button(props) {
  return (
    <div >
      <button className={classes.btn}>
        <Link className={classes.content} to="/">{props.content}</Link>
      </button>
      
      
    </div>
  )
}
