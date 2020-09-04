import { combineReducers } from 'redux';
import popular from './popular';
import movieById from './movieById';
import favourite from './favourite';

const rootReducer = combineReducers({
  popular,
  movieById,
  favourite,
});

export default rootReducer;