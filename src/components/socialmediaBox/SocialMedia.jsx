import React from 'react';
import classes from './socialmedia.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation } from 'react-router-dom';


export default function SocialMedia(props) {
 
  const handleFb = () => {
    window.location.href = props.fb;
  }
  const handleInsta = () => {
    window.location.href = props.insta;
  }
  const handleLinkedIn = () => {
    window.location.href = props.linkedin;
  }
  return (
    <div className={classes.social_media}>
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.social_media_box}>
        <FacebookIcon onClick={handleFb} style={{color:props.color,width:props.size,height:props.size}} className={classes.icon}/>
        <InstagramIcon onClick={handleInsta} style={{color:props.color,width:props.size,height:props.size}} className={classes.icon}/>
        <LinkedInIcon onClick={handleLinkedIn} style={{color:props.color,width:props.size,height:props.size}} className={classes.icon}/>
      </div>
      
     
      
    </div>
  )
}
