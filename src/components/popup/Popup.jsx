import React from 'react';
import classes from './popup.module.css';
import {motion,  AnimatePresence} from 'framer-motion';
import Close from "@mui/icons-material/Close";
import SocialMedia from '../socialmediaBox/SocialMedia';

const backdropVariants = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const popVariants = {
    visible:{
        scale:1.1,
        y:"60px",
        opacity: 1,
        transition: {delay: 0.5}

    },
    hidden:{
        scale:0.5,
        y:"-100vh",
        opacity:0

    }
}
export default function Popup(props) {
  
  
    return (
    <AnimatePresence>
        { props.showPopup && (
            <motion.div className={classes.backdrop}
                variants={backdropVariants} 
                animate="visible"
                initial="hidden" 
                onClick={props.closePopup}
            >
                <motion.div className={classes.popup}
                    variants={popVariants} 
                    animate="visible"
                    initial="hidden"
                >
        
                    <img className={classes.img} src={props.img} alt="" />
                    <div className={classes.content}>
                         
                   
                            <h2 className={classes.title}>{props.name}</h2>
                            <h4>{props.title}</h4>
                       
                        <p className={classes.description}>{props.description}</p>
                        <div>
                           <SocialMedia fb={props.fb} insta={props.insta} linkedin={props.linkedin}color="#00C1C1" size="40px"/>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        )}
    </AnimatePresence>
    );
}
