import React from 'react'
import classes from './header.module.css';
import Landing from './../landing/Landing';

export default function Header(props) {
  return (
    <div className={classes.header}>
     
      <div className={classes.landing}>
         <Landing subtitle={props.subtitle} title={props.title} color={props.color} />
      </div>
      
    </div>
  )
}
