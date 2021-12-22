import React from 'react'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
export default function Ticker({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
      <CountUp {...rest} start={viewPortEntered ? null : 0}>
          {({ countUpRef }) => {
              return (
                  <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={isVisible => {
                          if (isVisible) {
                              setViewPortEntered(true);
                          }
                      }}
                      delayedCall
                  >
                      <h4 className={className} ref={countUpRef} />
                  </VisibilitySensor>
              );
          }}
      </CountUp>
  );
}
