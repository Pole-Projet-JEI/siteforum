import React from 'react'
import classes from './landing.module.css';
export default function Landing(props) {
  return (
    <div className={classes.landing}>
     
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      <h2 className={classes.title} style={{color:props.color}}>{props.title}</h2>
      <svg >
      
        <path d="M0,195 C83,188 467,108 486,165" stroke="#00C1C1"
              strokeWidth="3"
              fill="none"
              
              />
      </svg>
     
    </div>
  )
}
