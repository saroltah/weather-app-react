import React from "react";
import CityName from "./CityName";
import Degree from "./Degree";
import WeatherDetails from "./WeatherDetails";
import "./CurrentData.css";

export default function CurrentData() {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col">
            <CityName />
          </div>
          <div className="col">
            <Degree />
          </div>
          <div className="col">
            <WeatherDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
