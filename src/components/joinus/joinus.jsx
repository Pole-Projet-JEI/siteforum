import React from 'react';
import GoogleMaps from '../map/map';
import classes from './joinus.module.css';

const JoinUs = () => {
    return(
        <div className={classes.joinUs}  >
            <div className={classes.rejoignez}>
                <h1>Rejoignez-Nous</h1>
                <p>Institut National Des Sciences <br />Appliquées et de Technologie.<br /> 676 INSAT Centre Urbain Nord BP <br /> Tunis Cedex 1080.</p>
                <h2>Contactez nous !</h2>
                <p><span>Président :</span> Mohamed Amine Hamdi <br />Téléphone : +216 53 466 384 <br /><span>Responsable Dév.Commercial : </span> Mohamed Amine Gdoura  <br />Téléphone : +216 95 117 099 <br />Email:  <span>forum.jeinsat@gmail.com </span></p>
            </div>
            <div className={classes.map}>
               <GoogleMaps />
            </div>
        </div>
    )
}
export default JoinUs;
