import React from 'react';
import Button from '../button/Button';
import classes from './insatIntro.module.css';
export default function InsatIntro() {
  return (
    <div className={classes.insat}>
    <h1 className={classes.title}>INSAT</h1>
    <p className={classes.content}>L’Institut National des Sciences Appliquées et de Technologie ou INSAT est un établissement universitaire tunisien public rattaché à l’université de Carthage.</p>
    
    <p className={classes.content}>l’INSAT se prévaut de la bonne réputation de ses diplômés. Le score d’orientation à cet établissement est en hausse d’une année à l’autre grâce à la détermination des enseignants et à la qualité de ses programmes qui offrent un dosage judicieux de connaissances théoriques et pratiques.</p>
   
    <Button className={classes.btn} color="#F9138F"  content="VISITER LA PAGE OFFICIELLE DE L'INSAT" padding="150px" hover="#F9138F" />
    
  </div>
  )
}
