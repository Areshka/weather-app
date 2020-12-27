import React from "react";
import "./style.scss";

const HourlyTemp = ({
  hourlyWeatherData,
  fixedValue,
  backgroundColorTemperature,
}) => {
  return (
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
                      {fixedValue(el.temp)}
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
    /* /.row */
  );
};

export default HourlyTemp;
