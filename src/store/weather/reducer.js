import ActionTypes from "./actionTypes";

const createInitialState = {
  cities: JSON.parse(localStorage.getItem("cities")) || [],
};

const citiesWeatherReducer = (state = createInitialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CITY_WEATHER:
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };     

    default:
      return state;
  }
};

export default citiesWeatherReducer;
