import React  from 'react';
import classes from './hero.module.css';
import Button from '../../components/button/Button';
import Timer from '../timer/Timer';
import jeilogo from '../footer/logoJei2.png';
import insatlogo from './insat.png';
import hybride from './hybride.png';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Hero() {
  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
        y: 10,
        opacity: 1,
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0.2
        }
      });
    }
    if(!inView) {
      animation.start({y: '-200vh',
      opacity:0,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView, animation]);
  return (
    <div ref={ref}>
    <motion.div className={classes.hero} animate={animation}>
      <h2 className={classes.subtitle}>
        Le 15 Novembre 2023, INSAT, Tunis
      </h2>
      <h1 className={classes.title}>
        FORUM INSAT ENTREPRISE
      </h1>
      <Timer />
      <div className={classes.btns}>

        <div className={classes.section}>
          <div className={classes.btn}>
            <Button  content="OBTENEZ VOTRE TICKET" padding="120px" hover="#F9138F" link="https://fabskill.com/fr/event/22?fbclid=IwAR0UmDAXnBS7AJxcOnAayMbaqYZyuU0pJOgralx9yYdy-OlgJg_fl-qHdQ4"  />
          </div>
          <div className={classes.imgJ}>
            <img src={jeilogo} alt="p1" />
          </div>

        </div>
        
        
        <div className={classes.section}>
          <div className={classes.btn}>
            <Button content="OBTENEZ VOTRE STAND"  padding="120px" link="stand"/>
          </div>
          <div className={classes.imgI}>
            <img src={insatlogo} alt="p2" />
          </div>
        </div>
      </div>
      
        <div className={classes.second}>
          
          <div className={classes.img}>
            <img src={hybride} alt="p3" />
          </div>
          <h2>ÉVÉNEMENT HYBRIDE​</h2>
        
        </div>
      
      </motion.div>
    </div>
  )
}
