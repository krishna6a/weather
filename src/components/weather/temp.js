// 3b973b83c45f9d85dccfdf401b965c9e
// 82ede5388175a84367cbb8ad9c6336ee

// http://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&appid=82ede5388175a84367cbb8ad9c6336ee
// https://api.openweathermap.org/data/2.5/weather?q=ondon&appid=3b973b83c45f9d85dccfdf401b965c9e

import React, { useState, useEffect } from "react";
import WeatherCard from "./weatherCard";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("bhopal");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3b973b83c45f9d85dccfdf401b965c9e`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        weatherMood,
        speed, 
        country,
        temp,
        name,
        humidity,
        sunset,
        pressure,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* ------------------------------ */}

      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};
export default Temp;
