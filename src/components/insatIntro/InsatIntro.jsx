import React from 'react';
import Button from '../button/Button';
import classes from './insatIntro.module.css';
import insat from './insat.jpg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function InsatIntro() {
  
  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0.2
        }
      });
    }
    if(!inView) {
      animation.start({x: '-100vw',
      opacity:0,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);
  return (
    <div ref={ref}>
    <motion.div animate={animation} className={classes.insat}>
        <h1 className={classes.title}>INSAT</h1>
        <div className={classes.description}>
        
          <p className={classes.content}>L’Institut National des Sciences Appliquées et de Technologie ou INSAT est un établissement universitaire tunisien public rattaché à l’université de Carthage.<br /><br />
        
          l’INSAT se prévaut de la bonne réputation de ses diplômés. Le score d’orientation à cet établissement est en hausse d’une année à l’autre grâce à la détermination des enseignants et à la qualité de ses programmes qui offrent un dosage judicieux de connaissances théoriques et pratiques. </p>
          <img src={insat} className={classes.img} alt="" />
        </div>
        
      
      

      <div  className={classes.btn}>
        <Button color="#F9138F"  content="VISITER LA PAGE OFFICIELLE DE L'INSAT" link="https://www.facebook.com/insat.rnu.tn" hover="#F9138F" />
      </div>
  </motion.div>
  </div>
  )
}
