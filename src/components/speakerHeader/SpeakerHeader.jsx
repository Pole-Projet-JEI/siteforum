import React from 'react'
import classes from './header.module.css';
import Button from '../button/Button'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function SpeakerHeader(props) {
 
    const {ref, inView} = useInView({
        threshold: 0.2 //20% should be visible
      });
    
      //ref : element that we want to monitor : when ref in view => inView =true , else false
      const animation = useAnimation();
     
      useEffect(() =>{
         
        // 3 hooks
        if(inView) {
          animation.start({
            scale: 1.1,
            transition: {
              type: 'spring' , duration: 1.2,bounce: 0.6
            }
          });
        }
        if(!inView) {
          animation.start({scale:0.5,
          transition: {
            type: 'spring' , duration: 1,bounce: 0
          }
        })
        }
          
      },[inView]);
    return (
    <div ref={ref} className={classes.header}>
     
      <motion.div animate={animation} className={classes.landing}>
         <h1>THEMATIQUE DU FORUM</h1>
         <Button content="REGARDER LA VIDEO" />
      </motion.div>
      
    </div>
  )
}
