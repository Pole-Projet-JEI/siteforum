import React from 'react'
import classes from './galerie.module.css';
import Button from '../button/Button';
export default function Galerie() {
  return (
    <div className={classes.galerie}>
      <div className={classes.slider}>
        <div className={classes.button}>
          <Button content="OBTENEZ VOTRE TICKET"/>
        </div>
        

      </div>

      
    </div>
  )
}
