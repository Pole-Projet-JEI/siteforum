import React from 'react';
import classes from './popup.module.css';
import {motion,  AnimatePresence} from 'framer-motion';
import Close from "@mui/icons-material/Close";

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
                           <Close onClick={props.closePopup} style={{color:"black",marginLeft:"350px",marginBottom:"-120px",marginTop:"-40px",cursor:"pointer"}}/>
                   
                            <h2 className={classes.title}>Foulen Fouleni</h2>
                       
                        <p className={classes.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum veritatis hic dolor, voluptatibus tempore. Eos omnis quam totam facilis.</p>
                        <div>
                            Social media
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        )}
    </AnimatePresence>
    );
}
