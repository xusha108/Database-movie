
let initialState = {movies: []};

const ActionTypes = {
  GET_POPULAR_MOVIES_SUCCESS: 'GET_POPULAR_MOVIES_SUCCESS',
  GET_MOVIE_BY_ID_SUCCESS: 'GET_MOVIE_BY_ID_SUCCESS',
}

export default (state = initialState, action) => {
  const {
    GET_POPULAR_MOVIES_SUCCESS,
    GET_MOVIE_BY_ID_SUCCESS    
    } = ActionTypes

switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
        return {
            ...state,
            movies: action.payload
        };
    case GET_MOVIE_BY_ID_SUCCESS:
        return {
          ...state,
          movies: action.payload
        };
  
    default:
        return state
  }
}

