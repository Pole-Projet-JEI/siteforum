import React, { useState, useEffect } from "react";
import classes from "./speakers.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import Axios from "axios";
import Landing from "../../components/landing/Landing";
import Speaker from "../../components/speaker/speaker";
import SpeakerHeader from "../../components/speakerHeader/SpeakerHeader";
import PlanningHackathon from "../../components/planningHackathon/planningHackathon";
import { workshopsInstructors } from "./SpeakersData";
import Team from "../../components/team/Team";

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
      <div className={classes.speakerHeader}>
        <SpeakerHeader />
      </div>
      <Landing
        subtitle="FORUM'S HACKATHON"
        title="HACK FOR GOOD"
        color="#0e920a"
        lineColor="#0e920a"
      />
      {/* {speaker.map((val,key) => {
            return(
              <div>
                 <Speaker id={val.id} image={process.env.PUBLIC_URL + `/speakers/speaker${val.id}.jpg`} name={val.firstname+" "+val.lastname} title={val.title} description={val.description} fb={val.fb} insta={val.insta} linkedin={val.linkedin}  />         
              </div>
              
            );
          }) } */}
      <div className={classes.hackInfos}>
        <div className={classes.descriptionContainer}>
          <div className={classes.descriptionHack}>
            <div className={classes.descriptionTitle}>Forum's Hackathon</div>
            <p>
              Une compétition de 4 jours pendant laquelle les participants vont
              développer un projet sous la thématique de la Responsabilité
              Sociétale des Entreprises (RSE) Durant cette compétition il y'aura
              une variété de formations et un pitching qui aura lieu le mercredi
              16 novembre 2022 à l'auditorium géant de l'INSAT
            </p>
          </div>
          <div className={classes.descriptionHack}>
            <div className={classes.descriptionTitle}>RSE</div>
            <p>
              La RSE (Responsabilité Sociétale des Entreprises) regroupe
              l’ensemble des pratiques mises en place par les entreprises dans
              le but de respecter les principes du développement durable,
              c’est-àdire être économiquement viable, avoir un impact positif
              sur la société mais aussi mieux respecter l’environnement.
            </p>
          </div>
        </div>
      </div>
      <PlanningHackathon />
      <Landing  title="Nos Formateurs" color="#ac0d0d" lineColor="" />
      <Team data={workshopsInstructors} />
      <Footer />
    </motion.div>
  );
}
