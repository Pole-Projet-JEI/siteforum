import React from 'react';
import ProfilOrganisateur from '../profilOrganisateur/ProfilOrganisateur';
import classes from './team.module.css';

export default function Team(props) {
    return (
        <div className={classes.slider}>
            <div className={classes.slide_track} >
            {props.data.map((val,key) => {
            return(
                <div key={key} className={classes.slide} >
                    <ProfilOrganisateur   name={val.firstname+" "+val.lastname} title={val.title} photo={val.photo} description={val.description}/>
                    <h3>{val.firstname+" "+val.lastname}</h3>
                    <h4>{val.title}</h4>
                </div>
            );
          })}
            </div>
        </div>
    );
}
