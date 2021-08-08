import React, { useEffect, useState } from "react";
import "./App.css";

const Tempapp = () => {
  const [city, setCity] = useState("Mumbai");
  const [search, setSearch] = useState("Mumbai");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2bd981784fb2272a1d91bf86bd06766`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setCityName("");
    };
    fetchApi();
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(cityName);
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <div className="heading">
            <h1>Weather App</h1>
            <p>Check the weather forecast</p>
          </div>
          <div className="inputData">
            <input
              type="text"
              value={cityName}
              placeholder="Enter the city name ..."
              onChange={(event) => {
                setCityName(event.target.value);
              }}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  setSearch(event.target.value);
                }
              }}
            />
            <button type="submit" className="btn" onClick={handleSubmit}>
              search
            </button>
          </div>
        </div>
        <div className="information">
          {!city ? (
            <p className="notFound">
              Sorry, we did't find any city of name {search}
            </p>
          ) : (
            <div className="info">
              <h1 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h1>
              <h2 className="temp">{city.temp} °C</h2>
              <h3 className="tempMinMax">
                Min: {city.temp_min} °C || Max: {city.temp_max} °C
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Tempapp;
