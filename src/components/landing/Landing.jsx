import React from 'react'
import classes from './landing.module.css';
export default function Landing(props) {
  return (
    <div className={classes.landing}>
     
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      <h2 className={classes.title} style={{color:props.color}}>{props.title}</h2>
      <svg >
      
        <path d="M10,163 C5,159 490,120 540,170" stroke="#00C1C1"
              strokeWidth="3"
              fill="none"
              
              />
      </svg>
     
    </div>
  )
}
