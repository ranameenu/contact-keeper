import React from 'react';

const Alert = ({ type, msg }) => {
  return (
    <div
      className={`alert  alert-dismissible fade show alert-${type}`}
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
