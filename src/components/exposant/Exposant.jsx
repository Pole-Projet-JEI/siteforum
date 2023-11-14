import React from 'react';
import ProfilExposant from '../profilExposant/ProfilExposant';
import classes from './exposant.module.css';

export default function Exposant() {

    return (
        <div className={classes.slider}>
            <div className={classes.slide_track} style={{ width: `${200 * entreprise.length}px`}}>
          {entreprise.map((val,key) => {
            return(
                <div key={key} className={classes.slide} >
                    <ProfilExposant photo={val.logo}/>
                </div>
            );
          })}
            </div>
        </div>
    );
}


export const entreprise = [
    {
        name : "Maghribiya",
        logo: "/entreprise/maghribiya.png",
    },
    {
        name : "Wynsys",
        logo: "/entreprise/wynsys.png",
    },
    {
        name : "Opus Lab",
        logo: "/entreprise/opus_lab.png",
    },
    {
        name : "Faurecia",
        logo: "/entreprise/faurecia.png",
    },
    {
        name : "Primatec",
        logo: "/entreprise/primatec.png",
    },
    {
        name : "Expensya",
        logo: "/entreprise/expensya.png",
    },
    {
        name : "EY",
        logo: "/entreprise/ey.png",
    },
    {
        name : "GTI",
        logo: "/entreprise/gti.jpeg",
    },
    {
        name : "Illiade Cosulting",
        logo: "/entreprise/illiade_consulting.png",
    },
    {
        name : "Instadeep",
        logo: "/entreprise/instadeep.png",
    },
    {
        name : "Integration Objects",
        logo: "/entreprise/integration_objects.png",
    },
    {
        name : "Mantu",
        logo: "/entreprise/mantu.png",
    },
    {
        name : "Naxum",
        logo: "/entreprise/naxum.png",
    },
    {
        name : "SEGITEC",
        logo: "/entreprise/segitec.jpg",
    },
    {
        name : "SFBT",
        logo: "/entreprise/sfbt.jpg",
    },
    {
        name : "Visteon",
        logo: "/entreprise/visteon.png",
    },
    {
        name : "One Tech",
        logo : "/entreprise/onetech.jpeg"
    },
    {
        name : "BlueJet",
        logo: "/entreprise/blue_jet.png",
    },
    {
        name : "Accompany",
        logo: "/entreprise/accompany_consulting.jpg",
    },
    {
        name : "Astral",
        logo : "/entreprise/astral.png"
    },
    {
        name : "Aneti",
        logo: "/entreprise/aneti.png",
    },
    {
        name : "Axe Finance",
        logo: "/entreprise/axe_finance.png",
    },
    {
        name : "LineData",
        logo: "/entreprise/linedata.jpg",
    },
    {
        name : "Sofrecom",
        logo: "/entreprise/sofrecom.png",
    },
    {
        name : "Habemus",
        logo: "/entreprise/habemus.png",
    },
    {
        name : "Kpmg",
        logo: "/entreprise/kpmg.png",
    },
    {
        name : "Save Your Wardrope",
        logo: "/entreprise/sav_your_wardrope.jpg",
    },
    {
        name : "Talan",
        logo: "/entreprise/talan.png",
    },
    {
        name : "Talys",
        logo: "/entreprise/talys.png",
    },
    {
        name : "Acoba",
        logo : "/entreprise/acoba.png"
    },
    {
        name : "Yopex",
        logo: "/entreprise/yopex.png",
    },
    {
        name : "Le Labo Marketing",
        logo: "/entreprise/le_labo_marketing.png",
    },
    {
        name : "Provesta Soft",
        logo: "/entreprise/provesta.png",
    },
    {
        name : "Alstom",
        logo : "/entreprise/alstom.png"
    },
    {
        name : "flouci",
        logo: "/entreprise/flouci.png",
    },
    {
        name : "PCP Consulting",
        logo: "/entreprise/pcp.png",
    },
]
