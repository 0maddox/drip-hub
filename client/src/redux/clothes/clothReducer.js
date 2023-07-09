import {
    FETCH_clothes_SUCCESS, FETCH_clothes_REQUEST, FETCH_clothes_FAILURE,
  } from './clothTypes';
  
  const initialState = {
    loading: false,
    clothes: [],
    error: '',
  };
  
  const clothReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CLOTHES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CLOTHES_SUCCESS:
        return {
          ...state,
          loading: false,
          clothes: action.payload,
          error: '',
        };
      case FETCH_CLOTHES_FAILURE:
        return {
          ...state,
          loading: false,
          clothes: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default clothReducer;