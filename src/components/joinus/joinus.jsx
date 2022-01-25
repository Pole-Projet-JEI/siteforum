import React from 'react';
import GoogleMaps from '../map/map';
import classes from './joinus.module.css';

const JoinUs = () => {
    return(
        <div className={classes.joinUs}>
            <div className={classes.rejoignez}>
                <h1>Rejoignez-Nous</h1>
                <p>Institut National Des Sciences <br />Appliquées et de Technologie.<br /> 676 INSAT Centre Urbain Nord BP <br /> Tunis Cedex 1080.</p>
                <h2>Contactez nous !</h2>
                <p><span>Président :</span> Mohamed BEN ATTIA <br />Téléphone : +216 58 457 575 <br /><span>Responsable Dév.Commercial : </span> Hiba BEN AYED  <br />Téléphone : +216 50 324 203 <br />Email:  <span>junior.entreprise.insat@gmail.com </span></p>
            </div>
            <div className={classes.map}>
               <GoogleMaps />
            </div>
        </div>
    )
}
export default JoinUs;