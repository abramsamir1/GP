import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer.js'
import SigninReducer from './SigninReducer.js'
import CategoriesReducer from './CategoriesReducer.js'
import ProfileReducer  from './ProfileReducer.js';
import HomeReducer from './HomeReducer';
import VisitedPlacesReducer from './VisitedPlacesReducer';
export default combineReducers({
  'login' : AuthReducer,
  'signup' : SigninReducer,
  'categories' : CategoriesReducer,
  'profile' : ProfileReducer,
  'homePost': HomeReducer,
  'visitedPlaces': VisitedPlacesReducer
});
