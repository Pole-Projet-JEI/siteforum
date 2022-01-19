import React, { Profiler } from 'react'
import './speakers.css';
import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import Profil from '../../components/profil/Profil';
import { motion } from 'framer-motion';
export default function Speakers(props) {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }
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
      
      <button onClick={ toggleModalState }>Open modal</button>
      
      {modalState && <Modal />}

    </motion.div>
      
    
  )
}
