
import React from "react";
import classes from "./formulaireStand.module.css";
import Button from "../button/Button";
import Landing from "../landing/Landing";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
function FormulaireStand() {
  
  const {ref, inView} = useInView({
    threshold: 0.7 //20% should be visible
  });
  
  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();
  
  useEffect(() =>{
     
    // 3 hooks
    if(inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring' , duration: 1.2,bounce: 0.2
        }
      });
    }
    if(!inView) {
      animation.start({x: '200vw',
      opacity:0,
      transition: {
        type: 'spring' , duration: 1,bounce: 0
      }
    })
    }
      
  },[inView]);
  return (
    <div ref={ref}>
    <motion.div  className={classes.card}>
    
      <div className={classes.center}>

        <div className={classes.title}>
          <Landing color="#004059" title="S'inscrire maintenant" />

        </div>
      
        <p>
          En prenant part a notre evenement , vous associez votre entreprise a une
          operation de communivation ciblée et efficace. En effet,votre entreprise
          bénéficiera d'une visibilité non seulement lors de la médiatisation de
          l'évenement mais aussi le jour meme de l'évènement.
        </p>
      <form className={classes.form} method="post" action="">
        <div className={classes.control}>
          <input type="text" placeholder="Votre Nom " required id="non" />
          </div>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Telephone "
              required
              id="telephone"
            />
          </div>
          <div className={classes.control}>
            <input type="text" placeholder="Email " required id="email" />
          </div>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Nom de lentreprise "
              required
              id="entreprise"
            />
          </div>
          <div className={classes.button}>
          <Button content="S'inscrire" type="submit"/>
        </div>
        
      </form>
    </div>
   
    </motion.div>
    </div>
  );
}

export default FormulaireStand;
