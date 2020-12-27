import { showAlertThunk } from "../store/alert/thunks";
import store from "../store/store";
import axios from "./axios.instance";

const APIkey = process.env.REACT_APP_API_KEY;

axios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    store.dispatch(showAlertThunk(error.response.data.message));
    return Promise.reject(error);
  }
);

export const getWeatherDataFetch = async (city) => {
  const { data } = await axios.get(
    `/weather?q=${city}&units=metric&appid=${APIkey}`
  );
  return data;
};

export const getWeatherDataByIDFetch = async (id) => {
  const { data } = await axios.get(
    `/weather?id=${id}&units=metric&appid=${APIkey}`
  );
  return data;
};

export const getHourlyWeatherFetch = async (lat, lon) => {
  const { data } = await axios.get(
    `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&units=metric&appid=${APIkey}`
  );
  return data;
};
