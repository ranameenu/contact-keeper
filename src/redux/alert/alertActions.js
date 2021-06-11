import { SET_ALERT, RESET_ALERT } from './types';

export const setAlert = (data) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: data,

    // Payload will be like as follows for alert
    // {
    //     loginUser: {
    //       loading: false,
    //       error: {
    //         success: false,
    //         message: 'Password do not match'
    //       }
    //     },
    //     alert: {
    //       alert: {
    //         success: false,
    //         message: 'Password do not match'
    //       }
    //     }
    //   }
  });
};

export const resetAlert = (data) => (dispatch) => {
  dispatch({
    type: RESET_ALERT,
  });
};
