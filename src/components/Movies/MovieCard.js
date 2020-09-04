import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

import {getMovieById} from '../../redux/actions/getMovieById';
import {addFavouriteMovies} from '../../redux/actions/addFavoriteMovies';
import '../Movies/MovieCard.scss';

class MovieCard extends Component { 

  addToFavorite = (id) => { 
    this.props.add(id)
  };
  
  componentDidMount() {    
    this.props.get(this.props.match.params.id);
  } 

  render() {
    const {movies} = this.props
    //console.log('movies', movies)     
  
    const styles = {
      backgroundImage:  `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(https://image.tmdb.org/t/p/original/${this.props.movies.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",          
    }   
    
    return (
      <div className="movie-card" style={styles}> 
        <div className='movie-card-poster'>     
          <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt='' />
       </div>  

       <div className="movie-card-info">
        <h1> {movies.title}</h1>
        <q className="movie-card-info-tagline"> {movies.tagline}</q>
        <h3 className="movie-card-info-overview">Overview: {movies.overview}</h3>
        <p className="movie-card-info-popularity">Popularity: {movies.popularity}</p> 
        <p className="movie-card-info-release_date">Date of release: {movies.release_date}</p>
        <button className="movie-card-info-fav" onClick={ () => {this.addToFavorite(movies.id) }}>&#9825;</button>
        <Link to={'/favourite'}><span className='movie-card-info-favorite' >Follow to favourites</span></Link> 
       </div>
      </div>
    )
  }
}
const mapStateToProps = (store) => {  
  return {
    ...store.movieById,
    favourites: store.favourite.movies
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    get: (id) => { getMovieById(id)(dispatch) },
    add: (id) => { dispatch(addFavouriteMovies(id)) }    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

