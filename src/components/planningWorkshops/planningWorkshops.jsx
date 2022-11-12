import React, { useState, useEffect } from "react";
import classes from "./planningWorkshops.module.css";
import Landing from "../../components/landing/Landing";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGrinStars,
  FaAdversal,
  FaMicrophone,
  FaCheck,
  FaMicroscope,
  FaStar,
  FaBusinessTime,
  FaLightbulb
} from "react-icons/fa";

export default function PlanningWorkshops(props) {
  
  return (
    <div className={classes.container}>
      
      <VerticalTimeline lineColor="#004059">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#21c3c330",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #21c3c330",
          }}
          date="08h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#004059" }}
          icon={<FaGrinStars />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Ouverture</h3>
          </div>
        </VerticalTimelineElement>
        {props.data.map((val,key) => {
           return(
            <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#21c3c330",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #21c3c330",
          }}
          date={val.lieuEtDate}
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#004059" }}
          icon={<FaLightbulb />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              {val.workshop}
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              {val.firstname+" "+val.lastname}
            </h4>
            <p>
              {val.citation}
            </p>
          </div>
        </VerticalTimelineElement>
            );
          })}
        
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#21c3c330",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #21c3c330",
          }}
          date="14h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#004059" }}
          icon={<FaMicrophone />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Pitching</h3>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fff", color: "#004059" }}
          icon={<FaCheck />}
        />
      </VerticalTimeline>
    </div>
  );
}
