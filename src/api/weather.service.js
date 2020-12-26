import axios from "./axios.instance";

const APIkey = process.env.REACT_APP_API_KEY;

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
