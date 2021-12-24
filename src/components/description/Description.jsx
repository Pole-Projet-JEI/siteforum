import classes from './description.module.css';
import React from 'react'
import SocialMedia from '../socialmediaBox/SocialMedia';
import speaker from './speaker1.png';
import CloseIcon from '@mui/icons-material/Close';
export default function Description() {
  return (
    <div className={classes.description}>
      <div className={classes.img}>
        <img src={speaker} alt="image" />

      </div>
      <div className={classes.content}>
        <div className={classes.intro}>
          <div className={classes.text}>
            <h2>Profil1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, commodi voluptates. Quis odit vel delectus tempore aspernatur qui animi quos.</p>
            
          </div>

        </div>
        

        <div className={classes.socials}>
          <SocialMedia />
          

        </div>

      </div>
      
    </div>
  )
}
