import classes from './home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Counter from '../../components/counter/Counter';
function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.first_part}>
        <Navbar />
        <Hero />
      </div>
      <Landing subtitle="Qui Sommes-Nous ?" title="JUNIOR ENTREPRISE INSAT" color="#004059"/>
      <Counter first={{number:30,title:"Entreprises"}} second={{number:10,title:"Speakers"}} third={{number:2000,title:"Présents au Forum"}} fourth={{number:8,title:"Workshop Offerts"}} />
      <Footer />
      
    </div>
  );
}

export default Home;
