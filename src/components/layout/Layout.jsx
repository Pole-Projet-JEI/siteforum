import React from 'react'
import classes from './layout.moule.css';
export default function Layout(props) {
  return (
   
      <div className={classes.first_part}>
        {props.children}
      </div>
      
    
  )
}
