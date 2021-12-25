import React from 'react'
import classes from './workshops.module.css';
import WorkshopItem from './../workshopItem/WorkshopItem';
import speaker from './speaker1.png';
export default function Workshops(props) {
  return (
    <div className={classes.workshops}>
        <h1>{props.type}</h1>
        <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker} />
        <hr />
        <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker}  />
        <hr />
        <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker}  />
        <hr />
        <WorkshopItem title="WORKSHOP DESIGN THINKING" place="Orange Center INSAT" time="2:30 pm" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" formateurN="FOULEN FOULENI" formateurD="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus omnis et, odit perspiciatis repellendus dolore ab hic ipsum eius adipisci!" photo={speaker}  />
        

      </div>
  )
}
