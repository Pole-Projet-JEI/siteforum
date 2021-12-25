import React from 'react'
import classes from './stand.module.css';
import Navbar from '../../components/navbar/Navbar';
import FormulaireStand from '../../components/formulaireStand/FormulaireStand';


export default function Stand() {
  return (
    
      <div className="stand">
        <div className={classes.first_part}>
        <Navbar/>
        <FormulaireStand/>
        </div>
      
       
    </div>
      
    
  )
}
