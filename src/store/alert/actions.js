import ActionTypes from "./actionTypes";

export const showAlertAction = (text, type) => {
  return {
    type: ActionTypes.SHOW_ALERT,
    payload: { text, type },
  };
};

export const hideAlertAction = () => {
  return {
    type: ActionTypes.HIDE_ALERT,
  };
};
