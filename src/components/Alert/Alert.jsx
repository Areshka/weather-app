import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideAlertAction } from "../../store/alert/actions";
import { alertStateSelector } from "../../store/alert/selectors";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(alertStateSelector);

  const hideAlert = () => dispatch(hideAlertAction());

  return (
    alert.visible && (
      <div
        className={`alert alert-${
          alert.type || "warning"
        } alert-dismissible mt-3`}
      >
        <strong>Attention!</strong> {alert.text}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={hideAlert}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
};

export default Alert;
