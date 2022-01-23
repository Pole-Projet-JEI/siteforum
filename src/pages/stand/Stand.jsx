import React from 'react'
import classes from './stand.module.css';
import Navbar from '../../components/navbar/Navbar';
import FormulaireStand from '../../components/formulaireStand/FormulaireStand';
import Counter from '../../components/counter/Counter';
import Footer from '../../components/footer/Footer';
import InsatIntro from '../../components/insatIntro/InsatIntro';
import Landing from '../../components/landing/Landing';
import { motion } from 'framer-motion';
export default function Stand(props) {
  document.body.style="overflow-y:unset";
  return (
    
      <motion.div 
          
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageVariants}
      transition={props.pageTransition}
        className={classes.stand}>
        <div className={classes.first_part}>
        <Navbar/>
        <div className={classes.landing}>
          <Landing subtitle="ENTREPRISES" title="OBTENEZ VOTRE STAND"/>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.photo_part}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque architecto sit reprehenderit nam quas dolores nisi reiciendis minus harum odit, maiores aperiam laboriosam alias. Doloremque explicabo ex nulla, nostrum omnis deserunt maiores numquam amet aliquid aspernatur architecto, sint vero repellat soluta, eveniet fugiat vitae esse dolorum nesciunt porro possimus? Nisi.</div>
          <div className={classes.part}><FormulaireStand/></div>
          
        </div>
        
        </div>
        <InsatIntro />
        <Counter first={{number:6,title:"Entreprises"}} second={{number:40,title:"Clubs Actifs"}} third={{number:3000,title:"Etudiants"}} fourth={{number:300,title:"Evénements Par An"}} />
        <div className={classes.filiere}>
          FILIERES
          <div>CH</div>
          <div>BIO</div>
          <div>GL</div>
          <div>RT</div>
          <div>IIA</div>
          <div>IMI</div>
        </div>
        <Footer />
        
      
       
    </motion.div>
      
    
  )
}
