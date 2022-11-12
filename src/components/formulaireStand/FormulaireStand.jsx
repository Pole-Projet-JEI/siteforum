import React from "react";
import classes from "./formulaireStand.module.css";
import Button from "../button/Button";
import Landing from "../landing/Landing";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect,useState } from 'react';
import { useAnimation } from 'framer-motion';
import axios from "axios";
import styles from "./formulaireStand.module.css";
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
  const [alert, setAlert] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");
  const [alertError, setAlertError] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [entreprise, setEntreprise] = useState("");
  useEffect(() => {
    if (alertError === "") {
    } else {
      setAlert(alertError);
      setAlertSuccess("");
    }
  }, [alertError]);
  useEffect(() => {
    if (alertSuccess === "") {
    } else {
      setAlert(alertSuccess);
      setAlertError("");
    }
  }, [alertSuccess]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/exposant/add",
        data: {
          nom,
          email,
          telephone,
          entreprise
        },
      });
      console.log(response.data);
      setAlertSuccess(response.data);
    } catch (error) {
      console.log(error.response.data);
      setAlertError(error.response.data);
    }
  };
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
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <input type="text" placeholder="Votre Nom " required id="non" onChange={(e) => setNom(e.target.value)}/>
          </div>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Telephone "
              onChange={(e) => setTelephone(e.target.value)}
              required
              id="telephone"
            />
          </div>
          <div className={classes.control}>
            <input type="text" placeholder="Email " required id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={classes.control}>
            <input
              type="text"
              placeholder="Nom de lentreprise "
              required
              id="entreprise"
              onChange={(e) => setEntreprise(e.target.value)}
            />
          </div>
          {alert.length > 0 && alert === alertError && (
              <div className={styles.alertError}>{alert}</div>
            )}
            {alert.length > 0 && alert === alertSuccess && (
              <div className={styles.alertSuccess}>{alert}</div>
            )}
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
