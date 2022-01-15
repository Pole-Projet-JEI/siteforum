import React from 'react'
import classes from './planning.module.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Workshops from '../../components/workshops/Workshops';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Planning() {
  const [ enLigneIsOpen, setEnLigneIsOpen] = useState(false);
  const [ btnContent, setBtnContent] = useState("EN LIGNE");
  
  function clickHandler() {
    setEnLigneIsOpen(true);
    setBtnContent("PRESENTIEL");
    console.log('en ligne displayed');

  }
  function clickHandler1() {
    setEnLigneIsOpen(false);
    setBtnContent("EN LIGNE");

  }

  return (
    <div className="planning">
      <div className={classes.first_part}>
       <Navbar/>
      </div>
      <Header subtitle="JOUR J" title="NOTRE PLANNING DU JOUR" color="#fff"/>
      <div className={classes.workshops_container}>
        <div className={classes.intro}>
            <h2 className={classes.date}>Le 24 Novembre 2021</h2>
           

            { enLigneIsOpen && <Button content={btnContent} color="#00C1C1" onClick={clickHandler1}/> }
            
            { !enLigneIsOpen && <Button content={btnContent} color="#00C1C1" onClick={ clickHandler }/> }
        </div>
        { enLigneIsOpen && <Workshops type="en ligne" /> }
        { !enLigneIsOpen &&  <Workshops type="présentiel" /> } 
      </div>
      <Footer />
      
      
      
      
    </div>
  )
}
