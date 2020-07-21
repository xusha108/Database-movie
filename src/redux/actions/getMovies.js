
// export function getMoviesSucsess (popularMovies) {
//   return {
//     type: "GET_POPULAR_MOVIES_SUCSESS",
//     payload: getMovies(),
//   }
// }


export function getMovies (dispatch) {
 
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.themoviedb.org/3/movie/550?api_key=3d2f97884c550b7e4e4bee8b99c164c1");
  xhr.send();
  xhr.onloadend = function () {
    if (xhr.status === 200) {      
      let obj = JSON.parse(xhr.response);
      dispatch({
        type: "GET_POPULAR_MOVIES_SUCSESS",
        payload: obj
      });
      return;
    }
    console.log("ERROR");
  };
}