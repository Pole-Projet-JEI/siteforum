import React from "react";
import classes from "./LoadingImage.module.css";
import img1 from './Imgs/img1.jpg';
import img2 from './Imgs/img2.jpg';
import img3 from './Imgs/img3.jpg';
import img4 from './Imgs/img5.jpg';
import img6 from './Imgs/img6.jpg';
import img5 from './Imgs/img5.jpg';
import img7 from './Imgs/img7.jpg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
const LoadingImage = () => {

  const {ref, inView} = useInView({
    threshold: 0.2 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
        scale:1,
        opacity: 1,
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0,delay:1.2
        }
      });
    }
    if(!inView) {
      animation.start({scale:0.5,
      opacity:0,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);

  return <div ref={ref} className={classes.container} >
    <motion.div  animate={animation} className={classes.img1}>
      <img className={classes.img} src={img1}  alt="" />
    </motion.div>
    <motion.div  animate={animation} className={classes.img2}>
      <img className={classes.img} src={img2}  alt="" />
    </motion.div>
    <motion.div  animate={animation} className={classes.img3}>
      <img className={classes.img} src={img3}  alt="" />
    </motion.div>
    <motion.div  animate={animation}className={classes.img4}>
      <img className={classes.img} src={img4}  alt="" />
    </motion.div>
    
    <motion.div  animate={animation} className={classes.img6}>
      <img className={classes.img} src={img6}  alt="" />
    </motion.div>
    <motion.div  animate={animation} className={classes.img5}>
      <img className={classes.img} src={img5}  alt="" />
    </motion.div>
    <motion.div animate={animation} className={classes.img7}>
      <img  className={classes.img} src={img7}  alt="" />
    </motion.div>
  </div>;
};

export default LoadingImage;

