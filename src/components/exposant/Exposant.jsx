import React from 'react';
import ProfilExposant from '../profilExposant/ProfilExposant';
import classes from './exposant.module.css';
import { useState , useEffect} from 'react';

import Axios from 'axios';


export default function Exposant() {
    
    const [exposant,setExposant] = useState([]);
    useEffect(() => {
          
      Axios.get('http://localhost:5000/exposant/').then( (response) => {
  
      setExposant(response.data);
       
  
     })
    .catch((error) => {
      console.error(error);
    });
    
    },[]);
    
    return (
        <div className={classes.slider}>
            <div className={classes.slide_track} style={{ width: `calc(300px * ${exposant.length} ); `}}>
            {exposant.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilExposant photo={process.env.PUBLIC_URL + `/exposant/entreprise${val.id}.png`}/>
                </div>
            );
          })}
         {exposant.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilExposant photo={process.env.PUBLIC_URL + `/exposant/entreprise${val.id}.png`}/>
                </div>
            );
          })}
         

            </div>
        
        </div>
    );
}
