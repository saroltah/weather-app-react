import React from "react";
import "./Degree.css";

export default function Degree() {
  let DegreeData = { currentDegree: "5", condition: "Sunny" };

  return (
    <div className="Degree">
      <img
        className="emoji"
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="icon"
      />
      <span className="currentDegree">{DegreeData.currentDegree}</span>
      <span className="celsius"> C°</span>
      <br />
      <span className="condition">{DegreeData.condition}</span>
    </div>
  );
}
