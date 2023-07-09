import {
    FETCH_CLOTH_ITEM_REQUEST, FETCH_CLOTH_ITEM_SUCCESS, FETCH_CLOTH_ITEM_FAILURE,
  } from '../clothes/clothTypes';
  
  const initialState = {
    loading: false,
    cloth: {},
    error: '',
  };
  
  const clothItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CLOTH_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CLOTH_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          cloth: action.payload,
          error: '',
        };
      case FETCH_CLOTH_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          cloth: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default clothItemReducer;