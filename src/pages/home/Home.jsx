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
function Home() {

 
  return (
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
          <div className={classes.card}>
            <Profil name="Foulen Fouleni " photo={speakerphoto} description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
          <div className={classes.card}>
            <Profil name="Foulen Fouleni " description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
          <div className={classes.card}>
            <Profil name="Foulen Fouleni "  photo={speakerphoto} description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
          <div className={classes.card}>
            <Profil name="Foulen Fouleni " description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
          <div className={classes.card}>
            <Profil name="Foulen Fouleni " description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
          <div className={classes.card}>
            <Profil name="Foulen Fouleni " photo={speakerphoto} description="Responsable Workshops Étudiante en troisième année en Génie Logiciel"/>
            <h2>FoulenFouleni</h2>
            <h4>ResponsableX</h4>

          </div>
        </div>
      <Galerie />
      <Footer />
      
    </div>
  );
}

export default Home;
