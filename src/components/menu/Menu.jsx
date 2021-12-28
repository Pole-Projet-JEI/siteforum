import React from 'react';
import classes from './menu.module.css';
import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <div className={classes.menu}>
      <ul className={classes.links}>
        <li><Link className={classes.link} to="/">Accueil</Link></li>
        <li><Link className={classes.link} to="/planning">Planning</Link></li>
        <li><Link className={classes.link} to="/stand">Obtenez Votre Stand</Link></li>
        <li><Link className={classes.link} to="/speakers">Nos Speakers</Link></li>
        <li><Link className={classes.link} to="/faq">FAQ</Link></li>
      </ul>      
    </div>
  )
}
