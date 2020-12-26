import ActionTypes from "./actionTypes";

export const addCityAction = (cityID) => {
  return {
    type: ActionTypes.ADD_CITY_WEATHER,
    payload: cityID,
  };
};

export const deleteCityAction = (cityID) => {
  return {
    type: ActionTypes.REMOVE_CITY_WEATHER,
    payload: cityID,
  };
};