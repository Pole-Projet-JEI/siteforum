
import React from "react";
import classes from "./formulaireStand.module.css";
import Button from "../button/Button";
import { Card } from "@mui/material";

function FormulaireStand() {
  return (
    <div className={classes.card}>
    
    <div className={classes.center}>
      <h1>s'inscrire maintenant</h1>
      <p>
        En prenant part a notre evenement , vous associez votre entreprise a une
        operation de communivation ciblée et efficace. En effet,votre entreprise
        bénéficiera d'une visibilité non seulement lors de la médiatisation de
        l'évenement mais aussi le jour meme de l'évènement.
      </p>
      <form className={classes.form}>
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
          <Button content="S'inscrire" />
        </div>
        
      </form>
    </div>
   
    </div>
  );
}

export default FormulaireStand;
