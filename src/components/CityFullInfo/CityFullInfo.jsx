import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getHourlyWeatherFetch,
  getWeatherDataFetch,
} from "../../api/weather.service";
import { showAlertThunk } from "../../store/alert/thunks";
import "./style.scss";

const CityFull = () => {
  const dispatch = useDispatch();
  let { city } = useParams();
  const [weatherData, setWeatherData] = useState({});
  const [hourlyWeatherData, setHourlyWeatherData] = useState({});

  const getWeather = async () => {
    const weatherData = await getWeatherDataFetch(city);
    setWeatherData(weatherData);

    const hourlyWeatherData = await getHourlyWeatherFetch(
      weatherData.coord.lat,
      weatherData.coord.lon
    );
    setHourlyWeatherData(hourlyWeatherData);
  };

  const updateCityWeather = async () => {
    await getWeather(city);
    dispatch(showAlertThunk("Data updated", "success"));
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const convertZero = (value) => {
    return value.toFixed() === "-0" ? 0 : value.toFixed();
  };

  const backgroundColorTemperature = (value) => {
    if (Math.sign(convertZero(value)) === 1) return "orange";
    if (Math.sign(convertZero(value)) === -1) return "skyblue";
    return "grey";
  };

  const iconUrl =
    weatherData.weather &&
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

  return (
    <>
      <div className="row no-gutters mb-3">
        <div className="col-12">
          <h4 className="text-center mb-3">Weather in {weatherData.name}</h4>
        </div>
        {/* /.col-12 */}

        <div className="col-12 bg-dark text-center text-white">
          {weatherData.main && (
            <>
              <p className="display-4">
                {weatherData.main.temp.toFixed() + " °C"}
              </p>
              <p className="badge badge-secondary">
                {"Feel like: " + weatherData.main.feels_like.toFixed() + " °C"}
              </p>
            </>
          )}

          {weatherData.weather && (
            <div>
              <span>{weatherData.weather[0].main}</span>
              <img
                src={iconUrl}
                alt={weatherData.weather[0].description}
                title={weatherData.weather[0].description}
              />
            </div>
          )}

          <ul className="list-inline">
            {weatherData.main && (
              <>
                <li className="list-inline-item mr-4">
                  Humidity <br /> {weatherData.main.humidity + " %"}
                </li>
                <li className="list-inline-item mr-4">
                  Pressure <br /> {weatherData.main.pressure + " hPa"}
                </li>
              </>
            )}

            {weatherData.wind && (
              <li className="list-inline-item">
                Wind Speed <br /> {weatherData.wind.speed + " m/s"}
              </li>
            )}
          </ul>
        </div>
        {/* /.col-12 */}
      </div>
      {/* /.row */}

      <div className="row no-gutters">
        <div className="col-12">
          <h4 className="text-center">Hourly temperature</h4>
        </div>
        {/* /.col */}

        <div className="col-12">
          <ul className="temp mb-5">
            {hourlyWeatherData.hourly &&
              hourlyWeatherData.hourly.map((el, i) => {
                return (
                  i < 20 && (
                    <li
                      className="temp-item"
                      key={i}
                      style={{ width: 100 / 20 + "%" }}
                    >
                      <span
                        className="temp-item-value"
                        style={{
                          top: -el.temp + 50 + "%",
                          backgroundColor: backgroundColorTemperature(el.temp),
                        }}
                      >
                        {convertZero(el.temp)}
                      </span>
                      <span className="temp-item-time">
                        {new Date(el.dt * 1000).getHours() + ":00"}
                      </span>
                    </li>
                  )
                );
              })}
          </ul>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}

      <div className="row no-gutters">
        <div className="col-12 text-center">
          <p className="bg-dark text-white">
            Time of data calculation:{" "}
            {new Date(weatherData.dt * 1000).toLocaleString()}
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => updateCityWeather(city)}
          >
            Update weather
          </button>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </>
  );
};

export default CityFull;
