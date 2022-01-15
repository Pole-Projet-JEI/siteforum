import React from "react";
import classes from "./ObtenirTicket.module.css";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LayersIcon from "@mui/icons-material/Layers";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import Button from '../../components/button/Button';

export default function ObtenirTicket(props) {
  return (
    <div className={classes.wrapper}>

      <div className={classes.side}>
        <h1>Pourquoi Rejoindre Le Forum INSAT Entreprise </h1>
        <p>
          Notre événement vous offre d’innombrables opportunités de réseautage,
          des offres de stages ainsi que différents workshops enrichissants et
          une conférence des plus intéressante. Inscrivez-vous maintenant et
          faites décoller votre carrière professionnelle.
        </p>
        <Button content="OBTENEZ VOTRE TICKET" hover="#F9138F" color="#004059"/>
      </div>

      <div className={classes.card}>
        <div className={classes.carreau}>
          
        <div className={classes.content}>
          <h2> Réseautage </h2>
          
          <p>
            Une panoplie d’entreprises sera présente afin de vous permettre
            d’élargir et de développer votre réseau professionnel de manière
            solide et étendue.
          </p>
          </div>
          <ConnectWithoutContactIcon className={classes.icon}  style={{color:"#f8f8f8",paddingLeft:"5px",width:"60px",height:"60px",padding:"5px", backgroundColor:"#004059",borderTopLeftRadius:"50%"}}  />
        </div>

        <div className={classes.carreau}>
        <div className={classes.content}>
          <h2> Ambiance </h2>
          
          <p>
            Malgré le cadre professionnel on vous assure une ambiance chaleureuse
            et animée par différentes activités. Soyez nombreux et ne ratez pas
            cette expérience !
          </p>
          </div>
          
          <CelebrationIcon className={classes.icon} fontSize="large"  style={{color:"#f8f8f8",paddingLeft:"5px" ,width:"60px",height:"60px",backgroundColor:"#004059",borderTopLeftRadius:"50%"}}  />
        </div>

        <div className={classes.carreau}>
          <div className={classes.content}>
            <h2> Interférents </h2>
            
            <p>
              Faire appel à un conférencier pour aborder les thématiques
              d’entreprises est de plus en plus prisée au sein des différentes
              organisations.
            </p>

          </div>
          
          <LayersIcon className={classes.icon} fontSize="large"  style={{color:"#f8f8f8",paddingLeft:"5px",width:"60px",height:"60px",backgroundColor:"#004059",borderTopLeftRadius:"50%"}} />
        </div>

        <div className={classes.carreau}>
        <div className={classes.content}>
          <h2> Opportunités </h2>
       
          <p>
            On vous procure la chance de décrocher des offres de stages de fin
            d’études, contrats de professionnalisation et d’emploi à temps
            partiel.
          </p>
          </div>
          <ControlPointDuplicateIcon className={classes.icon} fontSize="large"  style={{color:"#f8f8f8",paddingLeft:"5px",width:"60px",height:"60px",backgroundColor:"#004059",borderTopLeftRadius:"50%"}}  />
        </div>
      </div>
    </div>
  );
}
