import React , {useState, useEffect} from 'react'
import classes from './workshopItem.module.css';
import Profil from './../profil/Profil';
import Axios from 'axios';

export default function WorkshopItem(props) {
  
  const [formateur,setFormateur] = useState({});
  useEffect(() => {
        
    Axios.get('http://localhost:5000/formateur/'+props.formateur).then( (response) => {

    setFormateur(response.data);
     

   })
  .catch((error) => {
    console.error(error);
  });
  
  },[]);
  return (
    <div className={classes.workshop_item}>
      <div className={classes.description}>
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
      </div>
      <div className={classes.profil}>
      <Profil fb={formateur.fb} insta={formateur.insta} linkedin={formateur.linkedin} name={formateur.firstname+" "+formateur.lastname} title={formateur.title} photo={props.photo} description={formateur.description}/>

      </div>

      
    </div>
  )
}
