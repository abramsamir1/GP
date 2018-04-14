import axios from 'axios';
import {
  GET_HOME_ATTEMP,
  GET_HOME_ATTEMP_SUCCESS,
  GET_HOME_ATTEMP_FAILED,
  SAVE_RATE_FAILED
  } from './type';


export const saveRate = ({ userId, product_id, rate_number, description }) => {
  return (dispatch) => {
    axios.post('http://2018.gp-fcih.egyprotech.com/Rate.php', {
      userId,
      product_id,
      rate_number,
      description
    })
    .then(response => console.log('response', response))
    .catch(() => rateFailed(dispatch));
  };
};

const rateFailed = (dispatch) => {
  dispatch({
  type: SAVE_RATE_FAILED
});
};

export const getUserPosts = () => {
  return (dispatch) => {
    dispatch({ type: GET_HOME_ATTEMP });
    axios.post('http://2018.gp-fcih.egyprotech.com/products.php?function=homeproduct')
    .then(response => DataDelivered(dispatch, response.data))
    .catch(() => DataFailure(dispatch));
  };
};

const DataDelivered = (dispatch, data) => {
  console.log('response', data);
  dispatch({
  type: GET_HOME_ATTEMP_SUCCESS,
  payload: data
});
};


const DataFailure = (dispatch) => {
dispatch({ type: GET_HOME_ATTEMP_FAILED });
};
