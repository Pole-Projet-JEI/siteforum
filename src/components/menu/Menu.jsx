import React from 'react';
import classes from './menu.module.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';

const variants = {
  hidden:{
    opacity: 0,
    y: '-200%'
  } ,
  visible: {
    opacity: 1,
    y: "0" 
  }
}
export default function Menu(props) {
  const changeCursor = () => {

   const cursor = document.querySelector(".cursor");
   console.log(cursor);
 /*   document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style','left:'+e.pageX + 'px')
      cursor.setAttribute('style','top:'+e.pageX + 'px')
    });*/
    
   
  }
 
  
  return (

      <AnimatePresence>
      <motion.div variants={variants} initial="hidden" animate="visible" exit={{y: -1000}} className={classes.menu_container} >

        <div className={classes.icon}>
          <i onClick={props.close} class="fas fa-times"></i>
        </div>
        <div className={classes.menu_wrapper}>
          <ul className={classes.menu}>
              <li><Link className={classes.link} to="/">Accueil</Link></li>
              <li><Link onClick={props.close} className={classes.link} to="/planning">Planning</Link></li>
              <li><Link onClick={props.close} className={classes.link} to="/stand">Obtenez Votre Stand</Link></li>
              <li><Link onClick={props.close} className={classes.link} to="/speakers">Hackathon du Forum</Link></li>
              <li><Link onClick={props.close} className={classes.link} to="/faq">FAQ</Link></li>
              <div class="cursor"   ></div>
          </ul>
        </div>
      </motion.div>
      </AnimatePresence>
    
  )
}
