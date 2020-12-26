import React from "react";
import { useSelector } from "react-redux";

import City from "./City";
import { citiesWeatherStateSelector } from "../store/weather/selectors";

const Cities = () => {
  const { cities } = useSelector(citiesWeatherStateSelector);

  return cities.length ? (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
      {cities
        .map((cityID, i) => <City cityID={cityID} key={cityID + "" + i} />)
        .reverse()}
    </div>
  ) : (
    <div className="text-center">
      <h4>No cities.</h4>
      <p>Please, add city.</p>
    </div>
  );
};

export default Cities;
