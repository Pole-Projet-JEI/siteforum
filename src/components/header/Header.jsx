import React from 'react'
import classes from './header.module.css';
import Landing from './../landing/Landing';
import jei from './jei.jpg';
export default function Header(props) {
  return (
    <div className={classes.header}>
      <img src={jei} alt="" className={classes.img} />
      <div className={classes.landing}>
         <Landing subtitle={props.subtitle} title={props.title} color={props.color} />
      </div>
      
    </div>
  )
}
