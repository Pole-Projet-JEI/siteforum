import React from 'react';
import classes from './whoarewe.module.css';
import Team from './TEAM.jpg';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function WhoAreWe(){
    const {ref, inView} = useInView({
        threshold: 0.2 //20% should be visible
      });
    
      //ref : element that we want to monitor : when ref in view => inView =true , else false
      const animation = useAnimation();
     
      useEffect(() =>{
         
        // 3 hooks
        if(inView) {
          animation.start({
            x: 0,
            transition: {
              type: 'spring' , duration: 1.2,bounce: 0
            }
          });
        }
        if(!inView) {
          animation.start({x: '200vw',
          transition: {
            type: 'spring' , duration: 1,bounce: 0
          }
        })
        }
          
      },[inView]);
    return(
    <div ref={ref}>
        <motion.div animate={animation} className={classes.whoarewe}>
        <div className={classes.imgJei}>
        <img src={Team} alt=''></img>
        </div>
        <div className={classes.forumJei}>
            <h1>Forum Junior <br></br>Entreprise INSAT</h1>
            
            <hr />
            <p>
            L’INSAT organise en collaboration avec la Junior Entreprise INSAT la 3ème édition de son événement le plus couru: LE FORUM INSAT ENTREPRISE, qui aura lieu le 24 Novembre 2021 en Hybride.
            Le Forum de l’INSAT est un lieu de rencontre entre des étudiants en quête de stages de PFE et même des contrats de professionnalisation et des entreprises à la recherche des profils à la fois compétents et polyvalents.
            Un Job Fair, des workshops enrichissants et une conférence des plus intéressante vous attendent. Tout est en votre faveur pour entamer la carrière professionnelle dont vous avez toujours rêvé.
            Soyez au rendez-vous le 24 Novembre à l’INSAT ou à travers Fab’Event.
            </p>
        </div>
    </motion.div>

    </div>
    
    )}