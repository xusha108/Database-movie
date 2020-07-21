
let initialState = {movies: []};

export default (state = initialState, action) => {
  
  if (action.type === 'GET_POPULAR_MOVIES_SUCSESS') {
    return {
      ...state,
      movies: [action.payload,action.payload,action.payload,action.payload]
    }
  }

  if (action.type === 'SUCCESS') {
    return {
      payload: action.payload
    }
  }
  
  return state;
}