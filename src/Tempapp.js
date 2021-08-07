import React, { useEffect, useState } from "react";
import "./App.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f2bd981784fb2272a1d91bf86bd06766`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p>No data found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{city.temp} °Cel</h1>
            <h3 className="tempMinMax">
              Min: {city.temp_min} °Cel || Max: {city.temp_max} °Cel
            </h3>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;
