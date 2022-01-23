import React from 'react'
import logo from './logo.png';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../menu/Menu';
import { useState } from 'react';




export default function Navbar() {

  const [menuIsOpen,setMenuIsOpen] = useState(false);
  const [navbar,setNavbar] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(true);
    document.body.style="overflow-y:hidden";
    /*const offset = window.scrollY ;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${offset}px`; */
  }
  
  function closeMenuHandler() {

    setMenuIsOpen(false);
    document.body.style="overflow-y:unset";
   /* const scrollY = document.body.style.top;
     document.body.style.position = '';
     document.body.style.top = '';
     window.scrollTo(0, parseInt(scrollY || '0') * -1); 
    */
  }
  const changeBackground = () => {
    if (window.scrollY >= 450) {
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
       
       
      </div>
      { menuIsOpen && <Menu close={closeMenuHandler}  onClick={closeMenuHandler}/> }
     
    </div>
  )
}
