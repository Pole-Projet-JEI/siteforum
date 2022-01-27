import React, { useState, useEffect } from "react";
import classes from "./speakers.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import { motion } from "framer-motion";
import Axios from "axios";
import Landing from "../../components/landing/Landing";
import Speaker from "../../components/speaker/speaker";
import SpeakerHeader from "../../components/speakerHeader/SpeakerHeader";

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
      <SpeakerHeader />
      <Landing subtitle="NOS SPEAKERS" title="LES SPEAKERS DE LA CONFERENCE" color="#01212E" />
      {speaker.map((val,key) => {
            return(
              <div>
                 <Speaker id={val.id} image={process.env.PUBLIC_URL + `/speakers/speaker${val.id}.jpg`} name={val.firstname+" "+val.lastname} title={val.title} description={val.description} fb={val.fb} insta={val.insta} linkedin={val.linkedin}  />         
              </div>
              
            );
          }) }
          <Footer />
    </motion.div>
  );
}
