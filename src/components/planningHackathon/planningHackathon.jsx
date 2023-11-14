import React, { useState, useEffect } from "react";
import classes from "./planningHackathon.module.css";
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
  FaBahai,
} from "react-icons/fa";

export default function PlanningHackathon() {
  
  return (
    <div className={classes.container}>
      <Landing
        title="The Forum's Hackathon program "
        color="#0e920a"
        lineColor=""
      />
      <VerticalTimeline lineColor="#0e920a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Friday - 20h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaGrinStars />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Ouverture</h3>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Friday - 21h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaBusinessTime />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              Workshop BMC
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              Mr Jalel Ben Romdhane
            </h4>
            <p>
            The Business Model Canvas is one of the best known and most used tools to help entrepreneurs turn an idea into an organised strategy and a feasible business plan, using real data to get you closer to your goals.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Saturday - 20h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaStar />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              AI Integration In Health Care
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              Mr Houssem Ayadi
            </h4>
            <p>
              Integrating AI in healthcare involves leveraging artificial intelligence technologies to enhance medical processes, diagnosis, and treatment. This integration enables the analysis of vast amounts of health data, facilitates predictive analytics for diseases, and supports personalised patient care. By automating tasks and providing valuable insights, AI contributes to improved efficiency and better decision-making in the healthcare sector.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Tuesday - 20h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaMicroscope />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              Workshop Pitching
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              Mrs Samar Abidi
            </h4>
            <p>
            Pitching plays a crucial role in the business world, whether it is selling an idea or seeking additional funding, attracting excellent co-founders or recruiting the best employees.
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Wednesday 14h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaMicrophone />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Pitching</h3>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#36c13148",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #36c13148",
          }}
          date="Wednesday 17h45"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaBahai />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Announcement of winners</h3>
          </div>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          iconStyle={{ background: "#fff", color: "#0e920a" }}
          icon={<FaCheck />}
        />
      </VerticalTimeline>
    </div>
  );
}
