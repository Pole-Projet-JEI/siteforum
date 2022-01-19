import React from 'react'
import classes from './workshops.module.css';
import WorkshopItem from './../workshopItem/WorkshopItem';
import speaker from './speaker1.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
export default function Workshops(props) {
  
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
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0
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
    <div>
      <div ref={ref} className={classes.workshops} >
        <motion.h1 animate={animation} >{props.type}</motion.h1>
        <motion.div animate={animation}>
          <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker} />
        </motion.div>
        
        <hr />
        <motion.div animate={animation}>
          <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker} />
        </motion.div>
        <hr />
        <motion.div animate={animation}>
          <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker} />
        </motion.div>
        <hr />
        <motion.div animate={animation}>
          <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker} />
        </motion.div>
        

      </div>

    </div>
    
  )
}
