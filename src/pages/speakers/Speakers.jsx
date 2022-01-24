import React , {useState, useEffect} from 'react'
import classes from './speakers.module.css';
import Navbar from '../../components/navbar/Navbar';
import { motion } from 'framer-motion';
import Axios from 'axios';
import Profil from '../../components/profilOrganisateur/ProfilOrganisateur';
export default function Speakers(props) {
  
  document.body.style="overflow-y:unset";

  const [speaker,setSpeaker] = useState([]);
    useEffect(() => {
          
      Axios.get('http://localhost:5000/speakers/').then( (response) => {
  
      setSpeaker(response.data);
       
  
     })
    .catch((error) => {
      console.error(error);
    });
    
    },[]);
    
  return (
    
     <motion.div 
        
      initial="initial"
      animate="in"
      exit="out"
      variants={props.pageVariants} 
      transition={props.pageTransition}
      className={classes.speaker}>
        <div className={classes.first_part}>
        <Navbar/>
        </div>
        {speaker.map((val,key) => {
            return(
                <div>
                    <Profil description={val.description} fb={val.fb} insta={val.insta} linkedin={val.linkedin} name={val.firstname+" "+val.lastname} title={val.title} photo={process.env.PUBLIC_URL + `/speakers/speaker${val.id}.jpg`} />
                    <h2>{val.firstname+""+val.lastname}</h2>
                    <h4>{val.title}</h4>
                </div>
            );
          })}

       
      
       

    </motion.div>
      
    
  )
}
