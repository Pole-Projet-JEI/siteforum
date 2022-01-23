import React from 'react';
import classes from './profil.module.css';
import Popup from '../popup/Popup';
import {motion} from 'framer-motion';


const cardVariants = {
  hover: {
    opacity: 0.8
  }
}
export default function Profil(props) {
 
  
  return (
    <motion.div variants={cardVariants} whileHover="hover" className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />
  </motion.div>
  )
}
