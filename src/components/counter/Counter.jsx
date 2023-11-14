import React from 'react';
import classes from './counter.module.css';
import $ from 'jquery';
import CountUp from "react-countup";
import Ticker from '../ticker/Ticker';

export default function Counter(props) {
  return (
                <div className={classes.counter}>
                        <div className={classes.box}>
                            <Ticker className={classes.count} end={props.first.number} suffix="+" />
                            <h4 className={classes.title}>{props.first.title}</h4>
                        </div>
                    
                        <div className={classes.box}>
                            <Ticker className={classes.count} end={props.second.number} suffix="+"/>
                            <h4 className={classes.title}>{props.second.title}</h4>
                        </div>
                    
                        <div className={classes.box}>
                            <Ticker className={classes.count} end={props.third.number} suffix="+"/>
                            <h4 className={classes.title}>{props.third.title}</h4>
                        </div>
                   
                        <div className={classes.box}>
                              <Ticker className={classes.count} end={props.fourth.number} suffix="+" />
                              <h4 className={classes.title}>{props.fourth.title}</h4>
                        </div>
                  </div>
);
}
