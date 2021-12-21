import React from 'react'
import logo from './logo.png';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <Link to="/" >
        <img className={classes.logo} src={logo} alt="" />
      </Link>
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
