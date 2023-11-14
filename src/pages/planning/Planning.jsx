import React from 'react'
import classes from './planning.module.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Workshops from '../../components/workshops/Workshops';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {instructors, instructors2023, workshops} from './instructors';
import Landing from '../../components/landing/Landing';
import PlanningWorkshops from '../../components/planningWorkshops/planningWorkshops';
import InstructorsTeam from '../../components/instructorsTeam/instructorsTeam';
import Team from "../../components/team/Team";

export default function Planning(props) {

  const [isToggled, setIsToggled] = useState(false);
  document.body.style="overflow-y:unset";
  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={props.pageVariants}
    transition={props.pageTransition}
      className={classes.planning}
      >
      <div className={classes.first_part}>
       <Navbar/>
      </div>
      <Header subtitle="JOUR J" title="PLANNING DU JOUR" color="#fff"/>
      <div className={classes.workshops_container}>
        <div  className={classes.intro}>
            <h2 className={classes.date}>Le 15 Novembre 2023</h2>
        </div>

          {/*{ isToggled ? <PlanningWorkshops type="en ligne" data={instructors} /> : <PlanningWorkshops type="présentiel" data={workshops} /> }*/}
          <PlanningWorkshops data={workshops} />

      </div>
      <Landing  title="Nos Formateurs" color="#004059" lineColor="" />
      <Team data={instructors2023} />
      <Footer />
      
    </motion.div>
  )
}
