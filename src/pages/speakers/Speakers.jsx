import React from 'react'
import './speakers.css';
import Navbar from '../../components/navbar/Navbar';
import { motion } from 'framer-motion';
import Profil from '../../components/profil/Profil';
import speakerphoto from './speaker1.png';
export default function Speakers(props) {
  
  return (
    
     <motion.div 
        
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className="speaker">
        <div className={"first_part"}>
        <Navbar/>
        </div>
      
       <Profil  photo={speakerphoto}/>

    </motion.div>
      
    
  )
}
