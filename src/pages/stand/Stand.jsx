import React from 'react'
import classes from './stand.module.css';
import Navbar from '../../components/navbar/Navbar';
import FormulaireStand from '../../components/formulaireStand/FormulaireStand';
import Counter from '../../components/counter/Counter';
import Footer from '../../components/footer/Footer';
import InsatIntro from '../../components/insatIntro/InsatIntro';
import Landing from '../../components/landing/Landing';
export default function Stand() {
  return (
    
      <div className="stand">
        <div className={classes.first_part}>
        <Navbar/>
        <div className={classes.landing}>
          <Landing subtitle="ENTREPRISES" title="OBTENEZ VOTRE STAND"/>
        </div>
        <FormulaireStand/>
        </div>
        <InsatIntro />
        <Counter first={{number:6,title:"Entreprises"}} second={{number:40,title:"Clubs Actifs"}} third={{number:3000,title:"Etudiants"}} fourth={{number:300,title:"Evénements Par An"}} />
        <div className={classes.filiere}>
          FILIERES
          <div>CH</div>
          <div>BIO</div>
          <div>GL</div>
          <div>RT</div>
          <div>IIA</div>
          <div>IMI</div>
        </div>
        <Footer />
        
      
       
    </div>
      
    
  )
}
