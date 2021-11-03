import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favReducer'

export default combineReducers({
    movie: movieReducer,
    fav: favReducer
});