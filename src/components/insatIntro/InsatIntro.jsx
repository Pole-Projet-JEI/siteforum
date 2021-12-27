import React from 'react';
import Button from '../button/Button';
import classes from './insatIntro.module.css';
import insat from './insat.jpg';
export default function InsatIntro() {
  return (
    <div className={classes.insat}>
    <h1 className={classes.title}>INSAT</h1>
    <div className={classes.description}>
     
      <p className={classes.content}>L’Institut National des Sciences Appliquées et de Technologie ou INSAT est un établissement universitaire tunisien public rattaché à l’université de Carthage.<br /><br />
    
      l’INSAT se prévaut de la bonne réputation de ses diplômés. Le score d’orientation à cet établissement est en hausse d’une année à l’autre grâce à la détermination des enseignants et à la qualité de ses programmes qui offrent un dosage judicieux de connaissances théoriques et pratiques. </p>
      <img src={insat} className={classes.img} alt="" />
    </div>
    
   
  

   <div  className={classes.btn}>
    <Button color="#F9138F"  content="VISITER LA PAGE OFFICIELLE DE L'INSAT" link="https://www.facebook.com/insat.rnu.tn" hover="#F9138F" />
   </div>
  </div>
  )
}
