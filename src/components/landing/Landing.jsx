import React from "react";
import classes from "./landing.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
export default function Landing(props) {
  const { ref, inView } = useInView({
    threshold: 0.2, //20% should be visible
  });

  //ref : element that we want to monitor : when ref in view => inView =true , else false
  const animation = useAnimation();

  useEffect(() => {
    // 3 hooks
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      animation.start({
        scale: 0.5,
        opacity: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation} className={classes.landing}>
        <h3 className={classes.subtitle}>{props.subtitle}</h3>
        <h2 className={classes.title} style={{ color: props.color }}>
          {props.title}
        </h2>
        <svg style={{ width: "800px", marginLeft: "220px" }}>
          {props.lineColor != null ? (
            <path
              d="M10,163 C5,159 490,120 540,170"
              stroke={props.lineColor}
              strokeWidth="5"
              fill="none"
            />
          ) : (
            <path
              d="M10,163 C5,159 490,120 540,170"
              stroke="#00C1C1"
              strokeWidth="5"
              fill="none"
            />
          )}
          {/* <path
            d="M10,163 C5,159 490,120 540,170"
            stroke="#00C1C1"
            strokeWidth="5"
            fill="none"
          /> */}
        </svg>
      </motion.div>
    </div>
  );
}
