import React from 'react';
import ProfilOrganisateur from '../profilOrganisateur/ProfilOrganisateur';
import speakerphoto from './speaker1.png';
import classes from './team.module.css';
import { motion } from 'framer-motion';
import { useState , useEffect} from 'react';

import Axios from 'axios';


export default function Team() {
    
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
        <div className={classes.slider}>
            <div className={classes.slide_track} style={{ width: `calc(300px * ${organisateur.length} ); `}}>
            {organisateur.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilOrganisateur fb={val.fb} insta={val.insta} linkedin={val.linkedin} name={val.firstname+" "+val.lastname} title={val.title} photo={speakerphoto} description={val.description}/>
                    <h2>{val.firstname+""+val.lastname}</h2>
                    <h4>{val.title}</h4>
                </div>
            );
          })}
          {organisateur.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilOrganisateur fb={val.fb} insta={val.insta} linkedin={val.linkedin} name={val.firstname+" "+val.lastname} title={val.title} photo={speakerphoto} description={val.description}/>
                    <h2>{val.firstname+""+val.lastname}</h2>
                    <h4>{val.title}</h4>
                </div>
            );
          })}

            </div>
        
        </div>
    );
}
