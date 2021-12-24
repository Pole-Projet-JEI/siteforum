import classes from './description.module.css';
import React from 'react'
import SocialMedia from '../socialmediaBox/SocialMedia';
import speaker from './speaker1.png';
import CloseIcon from '@mui/icons-material/Close';
export default function Description(props) {
  return (
    <div className={classes.description}>
      <div className={classes.img}>
        <img src={speaker} alt="image" />

      </div>
      <div className={classes.content}>
        <div className={classes.intro}>
          <div className={classes.text}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            
          </div>

        </div>
        

        <div className={classes.socials}>
          <SocialMedia />
          

        </div>

      </div>
      
    </div>
  )
}
