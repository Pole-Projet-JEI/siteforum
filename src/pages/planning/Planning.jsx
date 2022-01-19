import React from 'react'
import classes from './planning.module.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Workshops from '../../components/workshops/Workshops';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
export default function Planning(props) {

  const [isToggled, setIsToggled] = useState(false);
 
  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={props.pageVariants}
    transition={props.pageTransition}
      className="planning"
      >
      <div className={classes.first_part}>
       <Navbar/>
      </div>
      <Header subtitle="JOUR J" title="NOTRE PLANNING DU JOUR" color="#fff"/>
      <div className={classes.workshops_container}>
        <div className={classes.intro}>
            <h2 className={classes.date}>Le 24 Novembre 2021</h2>
           
            {isToggled ? <Button content="Présentiel" onClick={ () => setIsToggled(!isToggled) } /> : <Button content="En Ligne" onClick={ () => setIsToggled(!isToggled) } />  }
           
        </div>
        { isToggled ? <Workshops type="en ligne" /> : <Workshops type="présentiel" /> }
      </div>
      <Footer />
      
    </motion.div>
  )
}
