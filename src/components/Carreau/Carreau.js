import React from "react";

import classes from "./Carreau.module.css";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LayersIcon from "@mui/icons-material/Layers";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";

const Carreau = (props) => {
  return (
    <section className={classes.carreau}>
      <h2> {props.title} </h2>
      {props.icon == "ConnectWithoutContactIcon" && (
        <ConnectWithoutContactIcon className={classes.icon} fontSize="large" />
      )}
      {props.icon == "CelebrationIcon" && (
        <CelebrationIcon className={classes.icon} fontSize="large" />
      )}
      {props.icon == "LayersIcon" && (
        <LayersIcon className={classes.icon} fontSize="large" />
      )}
      {props.icon == "ControlPointDuplicateIcon" && (
        <ControlPointDuplicateIcon className={classes.icon} fontSize="large" />
      )}

      <p> {props.description} </p>
    </section>
  );
};

export default Carreau;
