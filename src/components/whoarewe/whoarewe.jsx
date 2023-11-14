import React from "react";
import classes from "./whoarewe.module.css";
import Team from "./TEAM.jpg";

export default function WhoAreWe() {
  return (
    <div>
      <div className={classes.whoarewe}>
        <div className={classes.imgJei}>
          <img src={Team} alt=""></img>
        </div>
        <div className={classes.forumJei}>
          <h1>
            Forum Junior <br></br>Entreprise INSAT
          </h1>

          <hr />
          <p>
            Le Forum INSAT Entreprise, qui en est à sa cinquième édition, est
            organisé en collaboration avec la Direction de la vie universitaire
            et des relations environnementales et se tiendra à l'INSAT le 15
            novembre. You at the center. Votre avenir est notre plus grande
            préoccupation et c'est pourquoi nous avons tout fait pour vous aider
            à entamer la carrière de vos rêves.
          </p>
        </div>
      </div>
    </div>
  );
}
