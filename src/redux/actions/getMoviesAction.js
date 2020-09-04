import axios from 'axios';

export function getMoviesAction (dispatch) {
  axios
    .get('https://api.themoviedb.org/3/discover/movie?api_key=3d2f97884c550b7e4e4bee8b99c164c1&certification_country=US&certification.lte=G&sort_by=popularity.desc')
    .then(res => {
      const data = res.data
      //console.log('popmovies', data)
      dispatch({
              type: "GET_POPULAR_MOVIES_SUCCESS",
              payload: data.results
            });
            return;
    })
    .catch((error) => {
      console.log(error)
  })
}

