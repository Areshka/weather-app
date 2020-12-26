import ActionTypes from "./actionTypes";

export const alertReducer = (state = { visible: false }, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ALERT:
      return {
        ...action.payload,
        visible: true,
      };

    case ActionTypes.HIDE_ALERT:
      return {        
        visible: false,
      };

    default:
      return state;
  }
};
