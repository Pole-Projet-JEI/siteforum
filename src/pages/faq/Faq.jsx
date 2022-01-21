import React from 'react';
import classes from './faq.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import SocialMedia from '../../components/socialmediaBox/SocialMedia';
import Galerie from '../../components/galerie/Galerie';
import Footer from '../../components/footer/Footer';
import { motion } from 'framer-motion';
import Accordian from '../../components/accordian/Accordian';
export default function Faq(props) {
  return (
    <motion.div 
      
    initial="initial"
    animate="in"
    exit="out"
    variants={props.pageVariants}
    transition={props.pageTransition}
      
      className={classes.faq}>
      <div className={classes.first_part}>
        <Navbar />
        <Landing subtitle="FAQ" title="Les Questions Les Plus Fréquentes"/>
        <div className={classes.box}>
          <div className={classes.qts}>
            <Accordian />
          </div>
         <SocialMedia title="Pour Toute Question"  />
        </div>
      </div>
      <Galerie />
      <Footer />
      
    </motion.div>
  )
}
