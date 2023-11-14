import React from "react";
import ProfilOrganisateur from "../profilOrganisateur/ProfilOrganisateur";
import classes from "./instructorsTeam.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Axios from "axios";

export default function InstructorsTeam(props) {
  const cardVariants = {
    hover: {
      opacity: 0.8,
    },
  };

  return (
    <div className={classes.slider}>
      <div className={classes.slide_track}>
        {props.data.map((val, key) => {
          return (
            <div className={classes.slide}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className={classes.profil}
              >
                <img src={val.photo} alt="" className={classes.img} />
              </motion.div>

              <h3>{val.firstname + " " + val.lastname}</h3>
              <h4>{val.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
