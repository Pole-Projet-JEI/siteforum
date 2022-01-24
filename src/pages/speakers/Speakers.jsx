import React, { useState, useEffect } from "react";
import classes from "./Speakers.module.css";
import Navbar from "../../components/navbar/Navbar";
import { motion } from "framer-motion";
import Axios from "axios";
import Landing from "../../components/landing/Landing";
import Exposant from "../../components/exposant/Exposant";
import Speaker from "../../components/speaker/speaker";

export default function Speakers(props) {
  document.body.style = "overflow-y:unset";

  const [speaker, setSpeaker] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/speakers/")
      .then((response) => {
        setSpeaker(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className={classes.speaker}
    >
      <div className={classes.first_part}>
        <Navbar />
      </div>
      <Landing subtitle="NOS EXPOSANT" title="CONSULTER NOS EXPOSANTS" />
      <Speaker />
    </motion.div>
  );
}
