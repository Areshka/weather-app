import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteCityAction } from "../store/weather/action";
import { getWeatherDataByIDFetch } from "../api/weather.service";

const City = ({ cityID }) => {
  const dispatch = useDispatch();
  const [cityWeather, setCityWeather] = useState([]);

  const getWeather = async () => {
    try {
      const cityWeatherData = await getWeatherDataByIDFetch(cityID);
      setCityWeather(cityWeatherData);
    } catch (error) {}
  };

  useEffect(() => {
    getWeather(cityID);
  }, [cityID]);

  const iconUrl =
    cityWeather.weather &&
    "http://openweathermap.org/img/w/" + cityWeather.weather[0].icon + ".png";

  return (
    <div className="col mb-3">
      <div className="card h-100 border-dark text-center">
        <div className="card-header">
          <h4>{cityWeather.name}</h4>
        </div>
        {/* /.card-header */}

        <div className="card-body bg-dark text-white">
          <div className="card-text">
            {cityWeather.weather && (
              <div>
                <span>{cityWeather.weather[0].main}</span>
                <img
                  src={iconUrl}
                  alt={cityWeather.weather[0].description}
                  title={cityWeather.weather[0].description}
                />
              </div>
            )}
          </div>

          {cityWeather.main && (
            <h3 className="card-text">{cityWeather.main.temp.toFixed()} °C</h3>
          )}

          {cityWeather.wind && (
            <p className="card-text">
              Wind Speed: {cityWeather.wind.speed} m/s
            </p>
          )}

          <p className="card-text">
            <small>
              Time of data calculation:
              <br />
              {new Date(cityWeather.dt * 1000).toLocaleString()}
            </small>
          </p>
        </div>
        {/* /.card-body */}

        <div className="card-footer">
          <button
            className="btn btn-warning btn-sm w-50"
            onClick={() => getWeather()}
          >
            Update
          </button>

          <button
            className="btn btn-danger btn-sm w-50"
            onClick={() => dispatch(deleteCityAction(cityID))}
          >
            Delete
          </button>
         
        </div>
        {/* /.card-footer */}
      </div>
      {/* /.card */}
    </div>
  );
};

export default City;
