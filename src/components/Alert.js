import React from 'react';

const Alert = ({ type, msg }) => {
  return (
    <div
      class={`alert  alert-dismissible fade show alert-${type}`}
      role="alert"
    >
      {msg}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
