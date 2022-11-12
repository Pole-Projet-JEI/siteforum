import React from 'react';
import ProfilOrganisateur from '../profilOrganisateur/ProfilOrganisateur';
import classes from './team.module.css';
import { useState , useEffect} from 'react';

import Axios from 'axios';


export default function Team(props) {
    
    const [organisateur,setOrganisateur] = useState([]);
    useEffect(() => {
          
      Axios.get('http://localhost:5000/organisateur/').then( (response) => {
  
      setOrganisateur(response.data);
       
  
     })
    .catch((error) => {
      console.error(error);
    });
    
    },[]);
    
    // const data=[
    //   {
        
    //     firstname:"Oussema",
    //     lastname:"Achour",
    //     title:"Responsable Workshops",
    //     photo:"/organisateur/Achour.jpg",
    //     description:"",
    //   },
    //   {
        
    //     firstname:"Anas",
    //     lastname:"Chaibi",
    //     title:"Responsable Hackathon",
    //     photo:"/organisateur/Anas.png",
    //     description:"",
    //   },
    //   {
       
    //     firstname:"Feriel",
    //     lastname:"Bouhamed",
    //     title:"Responsable Logistique",
    //     photo:"/organisateur/Feriel.jpg",
    //     description:"",
    //   },
    //   {
        
    //     firstname:"Sandra",
    //     lastname:"Mourali",
    //     title:"Responsable MediaOff",
    //     photo:"/organisateur/Sandra.jpg",
    //     description:"",
    //   }
    // ]
    return (
        <div className={classes.slider}>
            <div className={classes.slide_track} >
            {props.data.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilOrganisateur   name={val.firstname+" "+val.lastname} title={val.title} photo={val.photo} description={val.description}/>
                    <h3>{val.firstname+" "+val.lastname}</h3>
                    <h4>{val.title}</h4>
                </div>
            );
          })}
          {/* {organisateur.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilOrganisateur fb={val.fb} insta={val.insta} linkedin={val.linkedin} name={val.firstname+" "+val.lastname} title={val.title} photo={process.env.PUBLIC_URL + `/organisateur/organisateur${val.id}.jpg`} description={val.description}/>
                    <h2>{val.firstname+"aaaaaaaaaa"+val.lastname}</h2>
                    <h4>{val.title}</h4>
                </div>
            );
          })} */}

            </div>
        
        </div>
    );
}
