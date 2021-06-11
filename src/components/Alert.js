import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from '../redux/alert/alertActions';

const Alert = () => {
  const alert = useSelector((state) => state.alerts.alert);
  return (
    <div
      className={`alert alert-dismissible fade show alert-${
        alert.success === true ? 'success' : 'danger'
      }`}
      role="alert"
    >
      {alert.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onclick={() => resetAlert()}
      ></button>
    </div>
  );
};

Alert.propType = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Alert;
