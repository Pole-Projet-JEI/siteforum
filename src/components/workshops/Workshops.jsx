import React from 'react'
import classes from './workshops.module.css';
import WorkshopItem from './../workshopItem/WorkshopItem';
import speaker from './speaker1.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Axios from 'axios';
import { useState } from 'react';
export default function Workshops(props) {
  
  const [workshops,setWorkshops] = useState([]);
  useEffect(() => {
        
    Axios.get('http://localhost:5000/workshop/').then( (response) => {

    setWorkshops(response.data);
     

   })
  .catch((error) => {
    console.error(error);
  });
  
  },[]);
  const {ref, inView} = useInView({
    threshold: 0.1 //20% should be visible
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
    
      <div ref={ref} className={classes.workshops} >
        <motion.h1 animate={animation}>{props.type}</motion.h1>
        {workshops.map((val,key) => {
            return(
              <div>
                 {props.type === val.type && <WorkshopItem animate={animation} title={val.title} place={val.place} time={val.time} description={val.description} photo={speaker} formateur={val.formateur} />}
                 
              </div>
              
              
             
             
            );
          }) }
          <hr />
        
     
    

      </div>

    
    
  )
}
