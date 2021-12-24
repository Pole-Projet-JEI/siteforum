import React from 'react';
import {useState} from 'react';
import Description from '../description/Description';
import Backdrop from '../backdrop/Backdrop';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import classes from './profil.module.css';
import speakerphoto from './speaker1.png';

export default function Profil(props) {
  const [ descriptionIsOpen, setDescriptionIsOpen] = useState(false); // delete modal not open

  function clickHandler() {
    setDescriptionIsOpen(true);
  }

  function closeDescriptionHandler() {

    setDescriptionIsOpen(false);
    
  }
  return (
    <div className={classes.profil}>
      <img src={props.photo} alt="" className={classes.img} />

      <AddCircleOutlineIcon className={classes.icon} onClick = { clickHandler /* no ()*/ }  />

       
      { descriptionIsOpen && <Description name={props.name} description={props.description} onCancel={closeDescriptionHandler} onConfirm={closeDescriptionHandler}/> }
      { descriptionIsOpen && <Backdrop onClick={closeDescriptionHandler} /> }


  </div>
  )
}
