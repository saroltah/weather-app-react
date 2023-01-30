import React from "react";
import "./CurrentTime.css";

export default function () {
  let CurrentTimeData = { hour: "05.00", day: "Friday" };

  return (
    <div className="CurrentTime">
      <span className="time">{CurrentTimeData.hour}</span>
      <br />
      <span className="day">{CurrentTimeData.day}</span>
    </div>
  );
}
