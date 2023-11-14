import React from 'react'
import classes from './galerie.module.css';

import Slider from '../slider/Slider';
export default function Galerie() {
  return (
    <div className={classes.galerie}>
        <Slider />
    </div>
  )
}
