import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormInput from "./FormInput";

import { showAlertThunk } from "../store/alert/thunks";
import { addCityAction } from "../store/weather/action";
import { getWeatherDataFetch } from "../api/weather.service";
import { citiesWeatherStateSelector } from "../store/weather/selectors";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector(citiesWeatherStateSelector);
  const location = useLocation();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));    
  }, [cities]);

  const onSubmit = async ({ city }) => {
    if (!city) {
      dispatch(showAlertThunk("Enter city"));
      return;
    }

    try {
      const weatherData = await getWeatherDataFetch(city);
      const check = cities.some((e) => e === weatherData.id);

      if (!check) {
        dispatch(addCityAction(weatherData.id));
        setValue("city", "");
      } else {
        dispatch(showAlertThunk("City exists"));
      }
    } catch (error) {}
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
      <NavLink to="/" exact className="navbar-brand">
        Weather App
      </NavLink>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
        </ul>
        {location.pathname === "/" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-inline">
              <FormInput
                className="form-control"
                type="text"
                name="city"
                placeholder="Add new city"
                ref={register()}
              />
              <button className="btn btn-warning" type="submit">
                Add
              </button>
            </div>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
