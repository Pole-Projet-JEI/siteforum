import classes from './home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Counter from '../../components/counter/Counter';
import Galerie from '../../components/galerie/Galerie';
import WhoAreWe from '../../components/whoarewe/whoarewe';
import ObtenirTicket from '../../components/ObtenirTicket/ObtenirTicket';
import Exposant from '../../components/exposant/Exposant';
import FormulaireContact from '../../components/formulaireContact/FormulaireContact';
import { motion } from 'framer-motion';
import Team from '../../components/team/Team';
import JoinUs from '../../components/joinus/joinus';
import {ocData, ocAdData, committeePresident} from './data';

function Home(props) {
  
  document.body.style="overflow-y:unset";
  return (
    <motion.div  
     
    initial="initial"
    animate="in"
    exit="out"
    variants={props.pageVariants}
    transition={props.pageTransition}
      >
      <div className={classes.home}>
        <div className={classes.first_part}>
          <Navbar />
          <Hero />
        </div>
        <Landing subtitle="Qui Sommes-Nous ?" title="JUNIOR ENTREPRISE INSAT" color="#004059"/>
        <WhoAreWe />
        <ObtenirTicket />
      
        <Counter first={{number:35,title:"Entreprises"}} second={{number:120,title:"Participants au Hackathon"}} third={{number:2000,title:"Présents au Forum"}} fourth={{number:12,title:"Workshop Offerts"}} />
        <Landing subtitle="NOS EXPOSANTS" title="LES EXPOSANT DU FORUM" color="#004059"/>
        <Exposant />
        <Landing subtitle="NOTRE ÉQUIPE" title="NOTRE COMITÉ D'ORGANISATION" color="#004059"/>
        <Team data={committeePresident}/>
        <Team data={ocData}/>
        <Team data={ocAdData} />

        <FormulaireContact />
        <div id="formContact">
        <JoinUs />
        </div>
        <Galerie />
        <Footer />
        
      </div>
    </motion.div>
  );
}

export default Home;
