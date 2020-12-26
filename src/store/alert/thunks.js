import { hideAlertAction, showAlertAction } from "./actions";

export const showAlertThunk = (text, type = "warning") => {
  return (dispatch) => {
    dispatch(showAlertAction(text, type));
    setTimeout(() => dispatch(hideAlertAction()), 5000);
  };
};
