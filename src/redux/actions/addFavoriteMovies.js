import axios from 'axios';

export const addFavouriteMovies = (id) => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3d2f97884c550b7e4e4bee8b99c164c1&language=en-US`
    )
    .then((res) => {
      const data = res.data;
      //console.log('action favourite', data);
      dispatch({
        type: 'ADD_FAVOURITE_MOVIES_SUCCESS',
        payload: data,
      });
      return;
    })
    .catch((error) => {
      console.log('error', error);
    });
};

export const removeFavouriteMovies = (id) => dispatch => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3d2f97884c550b7e4e4bee8b99c164c1&language=en-US`
    )
    .then((res) => {
      const data = res.data;
      console.log('remove action', data);
      dispatch({
        type: 'REMOVE_FAVOURITE_MOVIES_SUCCESS',
        payload: data,
      });
      return;
    })
    .catch((error) => {
      console.log('error', error);
    });
};



