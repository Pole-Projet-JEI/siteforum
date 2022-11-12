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
} from "react-icons/fa";

export default function PlanningHackathon() {
  const data = [
    {
      date: "Friday 21h00",
      title: "Ouverture",
      instructor: "",
    },
    {
      date: "Sunday 10h00",
      title: "Workshop BMC",
      instructor: "Mr Jalel Ben Romdhane",
    },
    {
      date: "Sunday 17h00",
      title: "Workshop UI/UX",
      instructor: "Mr Anas Tradi",
    },
    {
      date: "Wednesday Morning",
      title: "Workshop Pitching (in person)",
      instructor: "Mrs Asma selmi",
    },
    {
      date: "Wednesday 14h00",
      title: "Pitching",
      instructor: "",
    },
  ];
  return (
    <div className={classes.container}>
      <Landing
        title="The Forum's Hackathon program "
        color="#7e0e0e"
        lineColor=""
      />
      <VerticalTimeline lineColor="#ac0d0d">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 4, 4, 0.116)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 4, 4, 0.116)",
          }}
          date="Friday - 21h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
          icon={<FaGrinStars />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Ouverture</h3>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 4, 4, 0.116)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 4, 4, 0.116)",
          }}
          date="Friday - 21h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
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
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 4, 4, 0.116)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 4, 4, 0.116)",
          }}
          date="Friday - 21h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
          icon={<FaStar />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              Workshop UI/UX
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              Mr Anas Tradi
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 4, 4, 0.116)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 4, 4, 0.116)",
          }}
          date="Wednesday Morning"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
          icon={<FaMicroscope />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>
              Workshop Pitching (in person)
            </h3>
            <h4 className={classes.verticalTimelineElementSubtitle}>
              Mrs Asma selmi
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 4, 4, 0.116)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(255, 4, 4, 0.116)",
          }}
          date="Wednesday 14h00"
          dateClassName={classes.date}
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
          icon={<FaMicrophone />}
        >
          <div className={classes.timeLineElementContainer}>
            <h3 className={classes.verticalTimelineElementTitle}>Pitching</h3>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fff", color: "#ac0d0d" }}
          icon={<FaCheck />}
        />
      </VerticalTimeline>
    </div>
  );
}
