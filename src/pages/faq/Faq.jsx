import React from 'react';
import classes from './faq.module.css';
import Navbar from '../../components/navbar/Navbar';
import Landing from '../../components/landing/Landing';
import SocialMedia from '../../components/socialmediaBox/SocialMedia';
import Question from '../../components/question/Question';
import Galerie from '../../components/galerie/Galerie';
import Footer from '../../components/footer/Footer';
export default function Faq() {
  return (
    <div className={classes.faq}>
      <div className={classes.first_part}>
        <Navbar />
        <Landing subtitle="FAQ" title="Les Questions Les Plus Fréquentes"/>
        <div className={classes.box}>
          <div className={classes.qts}>
            <Question question="C'est quoi le forum ?" />
            <Question question="C'est quoi le forum ?" />
            <Question question="C'est quoi le forum ?" />
          </div>
         <SocialMedia title="Pour Toute Question"  />
        </div>
        
      </div>
      <Galerie />
      <Footer />
      
    </div>
  )
}
