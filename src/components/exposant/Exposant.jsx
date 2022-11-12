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

    const data=[
        {
            name:"3S",
            logo:"/exposant/3S.jpg"
        },
        {
            name:"axe-finance",
            logo:"/exposant/axe-finance.png"
        },
        {
            name:"BEYONDPLANS",
            logo:"/exposant/BEYONDPLANS.jpg"
        },
        {
            name:"Coficab",
            logo:"/exposant/Coficab.jpg"
        },
        {
            name:"Euranova",
            logo:"/exposant/Euranova.jpg"
        },
        {
            name:"ElyaData",
            logo:"/exposant/ElyaData.jpg"
        },
        {
            name:"Expensya",
            logo:"/exposant/Expensya.png"
        },
        {
            name:"ey-logo-black",
            logo:"/exposant/ey-logo-black.png"
        },
        {
            name:"Faurecia-logo",
            logo:"/exposant/Faurecia-logo.jpg"
        },
        {
            name:"finlogik",
            logo:"/exposant/finlogik.png"
        },
        {
            name:"habemus",
            logo:"/exposant/habemus.png"
        },
        {
            name:"iliade",
            logo:"/exposant/iliade.jpg"
        },
        {
            name:"infor",
            logo:"/exposant/infor.png"
        },
        {
            name:"integrationObjects",
            logo:"/exposant/integrationObjects.jpg"
        },
        {
            name:"karriery",
            logo:"/exposant/karriery.jpg"
        },
        {
            name:"KPMG",
            logo:"/exposant/KPMG.jpg"
        },
        {
            name:"Linedata_logo",
            logo:"/exposant/Linedata_logo.jpg"
        },
        {
            name:"Logo-Perenco",
            logo:"/exposant/Logo-Perenco.jpg"
        },
        {
            name:"mantu",
            logo:"/exposant/mantu.png"
        },
        {
            name:"newAccess",
            logo:"/exposant/newAccess.jpg"
        },
        {
            name:"Oddo-BHF-Tunis",
            logo:"/exposant/Oddo-BHF-Tunis.png"
        },
        {
            name:"ONETECH",
            logo:"/exposant/ONETECH.jpg"
        },
        {
            name:"Orange_logo.svg",
            logo:"/exposant/Orange_logo.svg.png"
        },
        {
            name:"segitec",
            logo:"/exposant/segitec.png"
        },
        {
            name:"sofrecom",
            logo:"/exposant/sofrecom.jpg"
        },
        {
            name:"tankmed",
            logo:"/exposant/tankmed.jpg"
        },
        {
            name:"telnet",
            logo:"/exposant/telnet.jpg"
        },
        {
            name:"visteon-vector-logo",
            logo:"/exposant/visteon-vector-logo.png"
        },
        {
            name:"Visteon",
            logo:"/exposant/Visteon.jpg"
        },
        {
            name:"WYNSYS",
            logo:"/exposant/WYNSYS.png"
        },


    ]
    
    return (
        <div className={classes.slider}>
            <div className={classes.slide_track} style={{ width: `calc(200px * ${data.length} ); `}}>
            {/* {exposant.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilExposant photo={process.env.PUBLIC_URL + `/exposant/entreprise${val.id}.png`}/>
                </div>
            );
          })} */}
          {data.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilExposant photo={val.logo}/>
                </div>
            );
          })}
         {/* {exposant.map((val,key) => {
            return(
                <div className={classes.slide} >
                    <ProfilExposant photo={process.env.PUBLIC_URL + `/exposant/entreprise${val.id}.png`}/>
                </div>
            );
          })} */}
         

            </div>
        
        </div>
    );
}
