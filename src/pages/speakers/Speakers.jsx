import React, { Profiler } from 'react'
import './speakers.css';
import Navbar from '../../components/navbar/Navbar';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import Profil from '../../components/profil/Profil';
export default function Speakers() {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }
  return (
    
     <div className="speaker">
      <div className={"first_part"}>
       <Navbar/>
      </div>
      
      <button onClick={ toggleModalState }>Open modal</button>
      
      {modalState && <Modal />}

    </div>
      
    
  )
}
