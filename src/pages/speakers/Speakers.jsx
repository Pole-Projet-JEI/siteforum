import React from 'react'
import './speakers.css';
import Navbar from '../../components/navbar/Navbar';
import { motion } from 'framer-motion';
import Menu from '../../components/menu/Menu';
export default function Speakers(props) {
  
  document.body.style="overflow-y:unset";
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

       
      
       

    </motion.div>
      
    
  )
}
