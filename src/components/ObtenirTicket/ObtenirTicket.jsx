import React from "react";
import classes from "./ObtenirTicket.module.css";
import Carreau from "../Carreau/Carreau";

export default function ObtenirTicket(props) {
  return (
    <div className={classes.card}>
      <div className={classes.side}>
        <h1>Pourquoi Rejoindre Le Forum INSAT Entreprise </h1>
        <p>
          Notre événement vous offre d’innombrables opportunités de réseautage,
          des offres de stages ainsi que différents workshops enrichissants et
          une conférence des plus intéressante. Inscrivez-vous maintenant et
          faites décoller votre carrière professionnelle.
        </p>
        <button> Obtenez Votre Ticket</button>
      </div>
      <div className={classes.body}>
        <Carreau
          icon="ConnectWithoutContactIcon"
          title="Réseautage"
          description="Une panoplie d’entreprises sera présente afin de vous permettre d’élargir et de développer votre réseau professionnel de manière solide et étendue."
        />
        <Carreau
          icon="ControlPointDuplicateIcon"
          title="Opportunités"
          description="On vous procure la chance de décrocher des offres de stages de fin d’études, contrats de professionnalisation et d’emploi à temps partiel.                "
        />
        <Carreau
          icon="LayersIcon"
          title="Interférents"
          description="Faire appel à un conférencier pour aborder les thématiques d’entreprises est de plus en plus prisée au sein des différentes organisations."
        />
        <Carreau
          icon="CelebrationIcon"
          title="Ambiance"
          description="Malgré le cadre professionnel on vous assure une ambiance chaleureuse et animée par différentes activités. Soyez nombreux et ne ratez pas cette expérience !"
        />
      </div>
    </div>
  );
}
