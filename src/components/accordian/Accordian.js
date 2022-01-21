import React, { useState } from 'react';
import { DataQuestion } from '../dataFaq/Data';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import classes from './Accordian.module.css';
const Accordian = () => {
    const [ clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
return(
    <div className={classes.accordianSection}>
        <div className={classes.container}>
            {DataQuestion.map((item,index)=>{
                return(
                    <div className={classes.faq}>
                        <div className={classes.question} onClick={() => toggle(index)} key={index}>
                        <h1>{item.question}</h1>
                        <span>{clicked === index ? <RemoveIcon className={classes.icon} /> : <AddIcon  className={classes.icon}/> }</span>
                        </div>
                        {clicked === index ? (
                        <div className={classes.reponse}>
                            <p>&emsp;{item.reponse}</p>
                        </div>
                        ) : null }
                    </div>
                )
            })}
        </div>
    </div>
)
}
export default Accordian