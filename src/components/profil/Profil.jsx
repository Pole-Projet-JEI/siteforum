import React from 'react';
import {useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classes from './profil.module.css';
import Popup from '../popup/Popup';
import FileBase64 from 'react-file-base64';

export default function Profil(props) {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(true);
   document.body.style="overflow-y:hidden";
   /* const offset = window.scrollY ;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${offset}px`;*/
   }
   const closeModal = () => {
     setModalState(false);
     document.body.style="overflow-y:unset";
     /*const scrollY = document.body.style.top;
     document.body.style.position = '';
     document.body.style.top = '';
     window.scrollTo(0, parseInt(scrollY || '0') * -1);*/
   }

   
  
 
  
  return (
    <div className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />

      <AddCircleOutlineIcon style={{width:"30px",height:"30px",transition:"0.5s ease-in"}} className={classes.icon} onClick = { toggleModalState  }  />
      
      {modalState && <Popup fb={props.fb} insta={props.insta} linkedin={props.linkedin} name={props.name} description={props.description} title={props.title} img={props.photo} closePopup = {closeModal} showPopup={modalState} />}
  </div>
  )
}
