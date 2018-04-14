import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import VisitedPlacesReducer from './VisitedPlacesReducer';

export default combineReducers({
homePost: HomeReducer,
visitedPlaces: VisitedPlacesReducer
});
