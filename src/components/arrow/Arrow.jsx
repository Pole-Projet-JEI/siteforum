import React, { useState } from 'react';
import classes from './arrow.module.css';
import arrow from './up_arrow.svg';
export default function Arrow() {

    const [arrow,setArrow] = useState(false);

    const handleClick = () => {
        window.scrollY = 0;
    }
    const showArrow = () => {
        if (window.scrollY >= 450) {
          setArrow(true);
        } else {
          setArrow(false);
        }
      }
    
      window.addEventListener('scroll',showArrow);
  return (
    <div className={classes.arrow} onClick={handleClick}>
        {arrow && <img src={arrow} alt=""  />}

    </div>
    );
}
