import * as fav from './favouriteTypes';

const initialState = {
  loading: false,
  clothes: [],
  error: '',
};

const getFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case fav.FETCH_FAVORITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case fav.FETCH_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        clothes: action.payload,
        error: '',
      };
    case fav.FETCH_FAVORITE_FAILURE:
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

export default getFavReducer;