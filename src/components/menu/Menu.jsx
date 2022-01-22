import React from 'react';
import classes from './menu.module.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function Menu() {
  
  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
        x: '50vw',
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0.7
        }
      });
    }
    if(!inView) {
      animation.start({x: '-100vw',
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);
  
  return (
    
    <div ref={ref} className={classes.menu}>
       <motion.div animate={animation} >
   <ul className={classes.links}>
     <li><Link className={classes.link} to="/">Accueil</Link></li>
     <li><Link className={classes.link} to="/planning">Planning</Link></li>
     <li><Link className={classes.link} to="/stand">Obtenez Votre Stand</Link></li>
     <li><Link className={classes.link} to="/speakers">Nos Speakers</Link></li>
     <li><Link className={classes.link} to="/faq">FAQ</Link></li>
   </ul>      
 </motion.div>

    </div>
   

  )
}
