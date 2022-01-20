import React from 'react';
import {useState} from 'react';
import Description from '../description/Description';
import Backdrop from '../backdrop/Backdrop';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classes from './profil.module.css';
import speakerphoto from './speaker1.png';
import Modal from '../../components/modal/Modal';


export default function Profil(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(true);
    
    
    document.body.style="overflow-y:hidden;";
  
  
   
  }
  
  
 
  /*const [ descriptionIsOpen, setDescriptionIsOpen] = useState(false); // delete modal not open

  function clickHandler() {
    setDescriptionIsOpen(true);
  }

  function closeDescriptionHandler() {

    setDescriptionIsOpen(false);
    
  }*/
  return (
    <div className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />

      <AddCircleOutlineIcon style={{width:"30px",height:"30px",transition:"0.5s ease-in"}} className={classes.icon} onClick = { toggleModalState  }  />
      
      {modalState && <Modal />  }
       
      {/* descriptionIsOpen && <Description name={props.name} description={props.description} onCancel={closeDescriptionHandler} onConfirm={closeDescriptionHandler}/> */ }
      {/* descriptionIsOpen && <Backdrop onClick={closeDescriptionHandler} /> */}


  </div>
  )
}
