import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";

import { alertReducer } from "./alert/reducer";
import citiesWeatherReducer from "./weather/reducer";

const rootReducer = combineReducers({
  cities: citiesWeatherReducer,
  alert: alertReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
