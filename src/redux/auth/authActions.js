import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import axios from 'axios';
import { API_URL } from '../../utils/Config';

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await axios.post(`${API_URL}/api/v1/auth`, data, {
      header: {
        'Content-Type': 'application/json',
      },
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    localStorage.setItem('token', res.data.token);
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
