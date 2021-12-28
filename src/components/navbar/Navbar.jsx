import React from 'react'
import logo from './logo.png';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../menu/Menu';
import { useState } from 'react';
import Close from '@mui/icons-material/Close';


export default function Navbar() {

  const [menuIsOpen,setMenuIsOpen] = useState(false);
  const [navbar,setNavbar] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(true);
  }
  
  function closeMenuHandler() {

    setMenuIsOpen(false);
    
  }
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);
  return (
    <div className={navbar ? classes.navbar_active : classes.navbar}>
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
      <div className={classes.menu}>
        { !menuIsOpen &&  <MenuIcon onClick={handleClick} className={classes.menu} style={{width:"30px",height:"30px",transition: "all 2s ease"}}/> }
        { menuIsOpen &&  <Close onClick={closeMenuHandler} className={classes.menu} style={{width:"30px",height:"30px",transition: "all 2s ease"}}/>}
       
      </div>
      { menuIsOpen && <Menu className={classes.responsive_menu} onClick={closeMenuHandler}/> }
     
    </div>
  )
}
