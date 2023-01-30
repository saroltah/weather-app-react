import React from "react";

export default function WeatherDetails() {
  let WeatherDetailsData = { wind: "5 km/h", humidity: "5%" };

  return (
    <div className="WeatherDetails">
      <span className="wind">Wind:{WeatherDetailsData.wind}</span>
      <br />
      <span className="humid">Rain:{WeatherDetailsData.humidity}</span>
    </div>
  );
}
