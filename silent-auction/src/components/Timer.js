import React, { useState, useEffect } from "react";

const Timer = props => {
  const countDownDate = props.bidDeadline;
  useEffect(
    setInterval(() => {
      const now = new Date().getTime();

      const timeToGo = countDownDate - now;

      const days = Math.floor(timeToGo / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeToGo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeToGo % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeToGo % (1000 * 60)) / 1000);

      document.getElementsByClassName("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (timeToGo < 0) {
        clearInterval();
        document.getElementsByClassName("timer").innerHTML = "EXPIRED";
      }
    }, 1000),
    [now]
  );

  return <div className="timer"></div>;
};

export default Timer;
