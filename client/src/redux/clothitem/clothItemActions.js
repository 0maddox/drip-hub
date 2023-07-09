import axios from 'axios';
import {
  FETCH_CLOTH_ITEM_REQUEST, FETCH_CLOTH_ITEM_SUCCESS, FETCH_CLOTH_ITEM_FAILURE,
} from '../cloth/clothTypes';

export const fetchClothItemRequest = () => ({
  type: FETCH_CLOTH_ITEM_REQUEST,
});

export const fetchClothItemSuccess = clothes => ({
  type: FETCH_CLOTH_ITEM_SUCCESS,
  payload: clothes,
});

export const fetchClothItemFailure = error => ({
  type: FETCH_CLOTH_ITEM_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchClothItem = id => function (dispatch) {
  dispatch(fetchClothItemRequest());
  axios
    .get(`/clothes/${id}`, { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchClothItemSuccess(data));
    })
    .catch(error => {
      dispatch(fetchClothItemFailure(error.response.data.error));
    });
};