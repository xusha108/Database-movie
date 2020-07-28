import React, { Component } from 'react';
import { connect } from "react-redux";

import {getMovieById} from '../../redux/actions/getMovieById';
import '../Movies/MovieCard.scss';

class MovieCard extends Component {

  componentDidMount() {
    this.props.get();
  } 

  render() {
    const{movies} = this.props 
    let htmlGenres = '';
    let htmlProduction = '';
    if(typeof movies.genres === 'object'){
      htmlGenres = movies.genres.map((item, index) => {
        return <span key={index}>{item.name}{ movies.genres.length - 1 === item ? '' : ', '}</span>
      })

      htmlProduction=movies.production_countries.map((item, index) => {
        return <span key={index}>{item.name}{ movies.production_countries.length - 1 === item ? '' : ', '}</span>
      })
    }
    console.log("movies", movies)    
    return (
      <div className="movie-card">
       <img src={`https://image.tmdb.org/t/p/original${movies.poster_path}`} alt='' />

       <div className="movie-card-info">
        <h1> {movies.title}</h1>
        <q className="movie-card-info-tagline"> {movies.tagline}</q>
        <h3 className="movie-card-info-overview">Overview: {movies.overview}</h3>
        <p className="movie-card-info-popularity">Popularity: {movies.popularity}</p>       
        <p>Genres: {htmlGenres}</p>
        <p>Countries: {htmlProduction}</p>
        <p className="movie-card-info-release_date">Date of release: {movies.release_date}</p> 
       </div>
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  return {
    ...store
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    get: () => { getMovieById(dispatch) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
