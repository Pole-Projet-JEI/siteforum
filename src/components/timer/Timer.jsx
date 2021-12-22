import React from 'react';
import './timer.module.css';
import {Component, useEffect, useRef, useState} from 'react';
import { ClassNames } from '@emotion/react';
import classes from './timer.module.css';
export default function Timer() {


  const [timerDays,setTimerDays]=useState("00");
  const [timerHours,setTimerHours]=useState("00");
  const [timerMinutes,setTimerMinutes]=useState("00");
  const [timerSeconds,setTimerSeconds]=useState("00");


  let interval=useRef();
  const startTimer=()=>{

      const countDownDate= new Date("November 24, 2022 08:00:00")
      interval= setInterval(()=>{

          const now=new Date().getTime();
          const distance= countDownDate - now;

          const days= Math.floor(distance/(1000*60*60*24));
          const hours=Math.floor(distance%(1000*60*60*24)/(1000*60*60));
          const minutes=Math.floor(distance%(1000*60*60)/(1000*60));
          const seconds=Math.floor(distance%(1000*60)/1000)

          if(interval<0) {
              //stop timer
              clearInterval(interval.current)
          }
          else{
              //update timer
              setTimerDays(days);
              setTimerHours(hours);
              setTimerMinutes(minutes);
              setTimerSeconds(seconds);
          }
      },1000);
  }

  useEffect(()=>{
      startTimer();
      return()=>{
          clearInterval(interval.current);
      };
  });

  const zeroPad =(num) =>{
      return num.toString().padStart(2, "0");
  }


  return (
              <div className={classes.timer}>
                      
                          <div className={classes.timer_element}>
                              
                              <h1>{zeroPad(timerDays)}</h1>
                              <h6 >JOURS</h6>
                          </div>

                          <div className={classes.timer_element}>
                              <h1>:</h1>
                              
                          </div>

                          <div className={classes.timer_element}>
                              <h1 >{zeroPad(timerHours)}</h1>
                              <h6 >HEURES</h6>
                          </div>
                          <div className={classes.timer_element}>
                              <h1>:</h1>
                              
                          </div>

                          <div className={classes.timer_element}>
                              <h1 >{zeroPad(timerMinutes)}</h1>
                              <h6 >MINUTES</h6>
                          </div>
                          <div className={classes.timer_element}>
                              <h1 >:</h1>
                              
                          </div>

                          <div className={classes.timer_element}>
                              <h1 id="countdown">{zeroPad(timerSeconds)}</h1>
                              <h6 id="countdownDetails">SECONDES</h6>
                          </div>
                      
              </div>
      );
 
}


