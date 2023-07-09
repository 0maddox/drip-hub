import axios from 'axios';
import {
  FETCH_CLOTHES_SUCCESS, FETCH_CLOTHES_REQUEST, FETCH_CLOTHES_FAILURE,
} from './carTypes';

export const fetchClotheSRequest = () => ({
  type: FETCH_CLOTHES_REQUEST,
});

export const fetchClothesSuccess = CLOTHES => ({
  type: FETCH_CLOTHES_SUCCESS,
  payload: CLOTHES,
});

export const fetchClothesFailure = error => ({
  type: FETCH_CLOTHES_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchClothes = () => function (dispatch) {
  dispatch(fetchClothesRequest());
  axios
    .get('/CLOTHES', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchClothesSuccess(data));
    })
    .catch(error => {
      dispatch(fetchClothesFailure(error.response.data.error));
    });
};