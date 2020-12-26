import ActionTypes from "./actionTypes";

export const addCityAction = (cityID) => {
  return {
    type: ActionTypes.ADD_CITY_WEATHER,
    payload: cityID,
  };
};