import axios from 'axios';

export const getMovieById = (id) => dispatch => { 
 
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d2f97884c550b7e4e4bee8b99c164c1&language=en-US`)
    .then(res => {
      const data = res.data
      console.log(data)
      dispatch({
              type: "GET_MOVIE_BY_ID_SUCCESS",
              payload: data
            });
            return;
    })
    .catch((error) => {
      console.log(error)
  })
}


