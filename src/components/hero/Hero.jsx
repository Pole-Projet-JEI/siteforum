import React from 'react';
import classes from './hero.module.css';
import Button from '../../components/button/Button';
import Timer from '../timer/Timer';
import jeilogo from './jeilogo.png';
import insatlogo from './insat.png';
import hybride from './hybride.png';
export default function Hero() {
  return (
    <div className={classes.hero}>
      <h2 className={classes.subtitle}>
        Le 24 Novembre 2021, INSAT, Tunis
      </h2>
      <h1 className={classes.title}>
        FORUM INSAT ENTREPRISE
      </h1>
      <Timer />
      <div className={classes.btns}>

        <div className={classes.section}>
          <div className={classes.btn}>
            <Button  content="OBTENEZ VOTRE TICKET" padding="150px" hover="#F9138F" link="planning"/>
          </div>
          <div className={classes.img}>
            <img src={jeilogo} alt="p1" />
          </div>

        </div>
        
        
        <div className={classes.section}>
          <div className={classes.btn}>
            <Button content="OBTENEZ VOTRE STAND"  padding="150px" link="stand"/>
          </div>
          <div className={classes.img}>
            <img src={insatlogo} alt="p2" />
          </div>

        </div>
       
        
        
        
      </div>
      
        <div className={classes.second}>
          
          <div className={classes.img}>
            <img src={hybride} alt="p3" />
          </div>
          <h2>ÉVÉNEMENT HYBRIDE​</h2>
        
        </div>
      
      </div>
  )
}
