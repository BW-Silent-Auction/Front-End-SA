import React, { useState, useEffect } from "react";

const Timer = props => {


// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = yyyy + '-' + mm + '-' + dd;

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
    []
  );

  return <div className="timer"></div>;
};

export default Timer;
