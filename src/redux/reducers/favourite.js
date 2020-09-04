const initialState = { 
  movies: [],
  ids: [],
};

const ActionTypes = {
  ADD_FAVOURITE_MOVIES_SUCCESS: 'ADD_FAVOURITE_MOVIES_SUCCESS',
  REMOVE_FAVOURITE_MOVIES_SUCCESS: 'REMOVE_FAVOURITE_MOVIES_SUCCESS',
};

export default (state = initialState, action) => {
  const { ADD_FAVOURITE_MOVIES_SUCCESS } = ActionTypes;  
  const { REMOVE_FAVOURITE_MOVIES_SUCCESS } = ActionTypes;  
 
  switch (action.type) {
    case ADD_FAVOURITE_MOVIES_SUCCESS:          

      if(!state.ids.includes(action.payload.id)) {  
        let newState = {
          ids: state.ids,         
        }
        newState.ids.push(action.payload.id);        
        localStorage.setItem ('favouriteId', newState.ids.toString()); 
      
        return newState;

      } else {
        return state  
      };
     
    case REMOVE_FAVOURITE_MOVIES_SUCCESS:      
        
        let newState = {
          ids: state.ids,
        }

        let index = null;
        for (let i=0; i < newState.ids.length; i++) {
          if (action.payload.id === newState.ids[i]) {
            index = i;
            break;
          }
        }     
        newState.ids.splice( index, 1);
        newState.ids.filter( el => el.id !== index) // посмотреть функционад
        localStorage.setItem ('favouriteId', newState.ids.toString());
        console.log('newState',newState.ids)      
             
       return newState;
         

    default:
      return state;
  } 
}
