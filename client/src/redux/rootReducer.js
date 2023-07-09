import { combineReducers } from 'redux';
import clothItemReducer from './clothItem/clothItemReducer';
import clothReducer from './clothes/clothReducer';
import userReducer from './users/userReducer';
import userRegisterReducer from './users/userRegisterReducer';
import favouriteReducer from './favourites/favouriteReducer';
import getFavReducer from './favourites/getFavReducer';

const rootReducer = combineReducers({
  clothes: clothReducer,
  clothItem: clothItemReducer,
  user: userReducer,
  signup: userRegisterReducer,
  favourites: favouriteReducer,
  getFavs: getFavReducer,
});

export default rootReducer;