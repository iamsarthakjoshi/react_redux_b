import React from "react";

const Weather = ({ data }) => {
  const CITIES = [
    {
      name: "Sydney",
      location: {
        lat: "-33.8688",
        lon: "151.2093"
      }
    },
    {
      name: "Brisbane",
      location: {
        lat: "-27.4698",
        lon: "153.0251"
      }
    },
    {
      name: "Melbourne",
      location: {
        lat: "-37.8136",
        lon: "144.9631"
      }
    },
    {
      name: "Snow Mountains",
      location: {
        lat: "-36.5000",
        lon: "148.3333"
      }
    }
  ];

  const currentData = {
    minTemp: data[0].min_temp,
    maxTemp: data[0].max_temp,
    statusCode: data[0].weather.code,
    statusDesc: data[0].weather.description
  };

  const futureData = [];

  return <div>{currentData.statusCode}</div>;
};

export default Weather;
