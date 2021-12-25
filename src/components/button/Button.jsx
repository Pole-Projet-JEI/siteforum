import React from 'react'
import classes from './button.module.css';
import { Link } from 'react-router-dom';
export default function Button(props) {
  return (
    <div >
       <button className={classes.btn} style={{background:props.color,borderColor:props.color,paddingLeft:props.padding,paddingRight:props.padding}}>
        <Link className={classes.content} to={"/"+props.link}>{props.content}</Link>
      </button>
      
      
    </div>
  )
}
