import React from 'react';
import classes from './counter.module.css';
import $ from 'jquery';
import CountUp from "react-countup";
import Ticker from '../ticker/Ticker';

export default function Counter(props) {
  return (
                <div className={classes.counter}>
                
                    
                        <div className={classes.box}>
                            <h2>
                                <Ticker className={classes.count} end={props.first.number} suffix="+" />
                                
                            </h2>
                            <h4>{props.first.title}</h4>
                        </div>
                    
                        <div className={classes.box}>
                            
                            <h2>
                              <Ticker className={classes.count} end={props.second.number} suffix="+"/>
                              
                            </h2>
                            <h4>{props.second.title}</h4>
                        </div>
                    
                        <div className={classes.box}>
                           
                            <h2>
                              <Ticker className={classes.count} end={props.third.number} suffix="+"/>
                            </h2> 
                            <h4>
                            {props.third.title}
                            </h4> 
                        </div>
                   
                        <div className={classes.box}>
                            
                            <h2>
                              <Ticker className={classes.count} end={props.fourth.number} suffix="+" />
                            </h2> 
                              <h4>{props.fourth.title}</h4>
                        </div>
                    
                  </div>
);
}
