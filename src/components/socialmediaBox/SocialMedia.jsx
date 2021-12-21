import React from 'react';
import classes from './socialmedia.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function SocialMedia(props) {
  return (
    <div className={classes.social_media}>
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.social_media_box}>
        <FacebookIcon className={classes.icon}/>
        <InstagramIcon className={classes.icon}/>
        <LinkedInIcon className={classes.icon}/>
      </div>
      
     
      
    </div>
  )
}
