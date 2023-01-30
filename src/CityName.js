import React from "react";
import "./CityName.css";

export default function CityName() {
  let CityNameData = { cityName: "London" };

  return <div className="CityName">{CityNameData.cityName}</div>;
}
