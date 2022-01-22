import classes from './home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Counter from '../../components/counter/Counter';
import Galerie from '../../components/galerie/Galerie';
import Profil from '../../components/profil/Profil';
import speakerphoto from './speaker1.png';
import WhoAreWe from '../../components/whoarewe/whoarewe';
import ObtenirTicket from '../../components/ObtenirTicket/ObtenirTicket';
import { motion } from 'framer-motion';
import Axios from 'axios';
import { useState , useEffect} from 'react';
import Popup from '../../components/popup/Popup';

function Home(props) {


  
   
  const [organisateur,setOrganisateur] = useState([]);
  useEffect(() => {
        
    Axios.get('http://localhost:5000/organisateur/').then( (response) => {

    setOrganisateur(response.data);
     

   })
  .catch((error) => {
    console.error(error);
  });
  
  },[]);
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
      
        <Counter first={{number:30,title:"Entreprises"}} second={{number:10,title:"Speakers"}} third={{number:2000,title:"Présents au Forum"}} fourth={{number:8,title:"Workshop Offerts"}} />
        <Landing subtitle="NOTRE ÉQUIPE" title="NOTRE COMITÉ D'ORGANISATION" color="#004059"/>
          <div className={classes.cards}>
          {organisateur.map((val,key) => {
            return(
              <div className={classes.card}>
                <Profil name={val.firstname+" "+val.lastname} title={val.title} photo={speakerphoto} description={val.description}/>
                <h2>{val.firstname+""+val.lastname}</h2>
                <h4>{val.title}</h4>

              </div>
             
            );
          })}
            
            
          </div>
        
        
       
        <Galerie />
        <Footer />
        
      </div>
    </motion.div>
  );
}

export default Home;
