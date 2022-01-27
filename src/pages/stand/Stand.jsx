import React from "react";
import classes from "./stand.module.css";
import Navbar from "../../components/navbar/Navbar";
import FormulaireStand from "../../components/formulaireStand/FormulaireStand";
import Counter from "../../components/counter/Counter";
import Footer from "../../components/footer/Footer";
import InsatIntro from "../../components/insatIntro/InsatIntro";
import Landing from "../../components/landing/Landing";
import Filiere from "../../components/filiere/Filiere";
import FiliereInverted from "../../components/filiere/FiliereInverted";
import LoadingImage from "../../components/loadingImage/LoadingImage";
import { motion } from "framer-motion";
import gl from './filiere/gl.jpg';
import rt from './filiere/rt.jpg';
import iia from './filiere/iia.jpg';
import imi from './filiere/imi.jpg';
import chimie from './filiere/chimie.jpg';
import bio from './filiere/bio.jpg';
export default function Stand(props) {
  document.body.style = "overflow-y:unset";
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageVariants}
      transition={props.pageTransition}
      className={classes.stand}
    >
      <div className={classes.first_part}>
        <Navbar />
        <div className={classes.landing}>
          <Landing subtitle="ENTREPRISES" title="OBTENEZ VOTRE STAND" />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.photo_part}>
           <LoadingImage />
          </div>
          <div className={classes.part}>
            <FormulaireStand />
          </div>
        </div>
      </div>
      <InsatIntro />
      <Counter
        first={{ number: 6, title: "Entreprises" }}
        second={{ number: 40, title: "Clubs Actifs" }}
        third={{ number: 3000, title: "Etudiants" }}
        fourth={{ number: 300, title: "Evénements Par An" }}
      />
      
      <Filiere image={chimie} name="CHIMIE INDUSTRIELLE" description="La chimie est aujourd’hui omniprésente dans les industries comme dans notre quotidien.
La filière chimie industrielle s’intéresse aux analyses physico-chimiques et d’élaboration de matériaux dans un contexte industriel.

Une filière aux étudiants flexibles ayant une formation polyvalente et diversifiée de la chimie dans tous ses aspects (de l’organique à la chimie fine), couplée aux sciences de l’ingénieur leur permettent ainsi l’adaptation à une multitude de domaines allant de la pharmaceutique à l’énergétique. leur adaptabilité s’applique tout aussi bien dans leur compétence théoriques que techniques. En effet, les étudiants de l’INSAT sont imbattables dans les labos." />
      <FiliereInverted image={bio} name="BIOLOGIE INDUSTRIELLE" description="Passant par la pharmaceutique et la biomédicale en allant jusqu’à l’alimentaire, La filière bio-industrie est la filière de l’INSAT qui s’intéresse aux analyses chimiques et biologiques appliquées aux industries . Elle est réputée par sa formation tantôt polyvalente,  tantôt structurée, donnant aux 

Les étudiants de cette filière ont ainsi une expertise dans la biologie sous toutes ses variantes, doublée d’une base solide dans les sciences de l’ingénieur qui sert à accentuer leur capacité analytique et leur esprit tactique.
Outre, les insatiens sont bien connus par leur habileté et dextérité technique, ce qui revient à leur formation orientée application et pratique." />
      <Filiere image={gl} name="GENIE LOGICIEL" description="Filière de l’avenir, la Génie logiciel de l’INSAT,  réputée par sa formation variée et ses étudiants extrêmement habiles de leur esprit logique et leur raisonnement tactique, est une filière brillante en Tunisie comme à l’international.



S’étalant de l’architecte des logiciels aux sciences des données, la formation des ingénieurs GL de l’INSAT est d’une variété étendue et d’une base solide." />
      <FiliereInverted image={rt} name="RESEAUX & TELECOMMUNCIATIONS" description="Couplant l’informatique aux moyens de communication dans les différents aspects de transmission de données et les organisations en réseau, la filière Réseaux informatique et télécommunications est une filière versatile par excellence. " />
      <Filiere image={iia} name="INFORMATIQUE INDUSTRIELLE & AUTOMATIQUE" description="La filière Informatique Industrielle et Automatique est le parfait couplage entre informatique, automatisme et industrie. Combinant ainsi la production automatisée et l’informatique de pointe procurant ainsi aux étudiants une versatilité hors norme dans le marché de travail. De l’électronique à [l’embarqué, les étudiants de l’IIA maîtrisent une vaste variante de domaines ce qui leur permet de s’adapter à maintes spécialités, aussi bien dans l’aspect théorique que technique. En effet, les étudiants IIA sont d’excellents praticiens dans leurs domaines." />
      <FiliereInverted image={imi} name="INSTRUMENTATION & MAINTENANCE INDUSTRIELLE" description="L’instrumentation et la maintenance industrielle, la filière de l’industrie par excellence, couplant instrumentation et maintenance, deux piliers de l’industrie. Les étudiants de l’IMI, versatiles et dotés de maîtrise dans les installations de fabrication et les processus et la production, peuvent s’adapter à tous type d’industries, vu la formation aussi variée que pointue qu’ils reçoivent : allant de l’électronique à la mécanique et passant par l’automatique." />
      <Footer />
    </motion.div>
  );
}
