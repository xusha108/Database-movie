import { getMovies } from "../actions/getMovies";

export default function popularMovies(state=[], action) {
  switch(action.type){
    case 'GET_POPULAR_MOVIES_SUCSESS':
      return action.getMovies
    default:
      return state;
    }   
  }



