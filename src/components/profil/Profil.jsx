import React from 'react';
import {useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classes from './profil.module.css';
import Popup from '../popup/Popup';


export default function Profil(props) {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(true);
   
    const offset = window.scrollY ;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${offset}px`;
   }
   const closeModal = () => {
     setModalState(false);
     const scrollY = document.body.style.top;
     document.body.style.position = '';
     document.body.style.top = '';
     window.scrollTo(0, parseInt(scrollY || '0') * -1);
   }
  
 
  
  return (
    <div className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />

      <AddCircleOutlineIcon style={{width:"30px",height:"30px",transition:"0.5s ease-in"}} className={classes.icon} onClick = { toggleModalState  }  />
      
      {modalState && <Popup img={props.photo} closePopup = {closeModal} showPopup={modalState} />}
  </div>
  )
}
