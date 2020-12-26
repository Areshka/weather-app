import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import citiesWeatherReducer from "./weather/reducer";

const rootReducer = combineReducers({
  cities: citiesWeatherReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
