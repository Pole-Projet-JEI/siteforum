import React from 'react'
import classes from './workshopItem.module.css';
import Profil from './../profil/Profil';
import { motion } from 'framer-motion';
export default function WorkshopItem(props) {
  return (
    <div className={classes.workshop_item}>
      <motion.div animate={props.animate} className={classes.description}>
        <div className={classes.details}>

          <div className={classes.temp}>
            <div className={classes.temp_part}>
             
                <h5>{props.time}</h5>
            </div>
            <div className={classes.temp_part}>
         

              <h5>{props.place}</h5>
            </div>
          </div>
          <h3 className={classes.title}>{props.title}</h3>
          <p>{props.description}</p>

        </div>
      </motion.div>
      <motion.div animate={props.animate}  className={classes.profil}>
        <Profil photo={props.photo} name={props.formateurN} description={props.formateurD} />

      </motion.div>

      
    </div>
  )
}
