import classes from './home.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import Hero from '../../components/hero/Hero';
function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.first_part}>
        <Navbar />
        <Hero />
      </div>
      <Landing subtitle="Qui Sommes-Nous ?" title="JUNIOR ENTREPRISE INSAT" color="#004059"/>
      
    </div>
  );
}

export default Home;
