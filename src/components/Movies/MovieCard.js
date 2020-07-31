import React, { Component } from 'react';
import { connect } from "react-redux";

import {getMovieById} from '../../redux/actions/getMovieById';
import '../Movies/MovieCard.scss';

class MovieCard extends Component {

  componentDidMount() {
    this.props.get(this.props.match.params.id);
  } 


  render() {
    const {movies} = this.props    
    
    let styles = {
      backgroundImage:  `url(https://image.tmdb.org/t/p/original/${this.props.movies.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      //filter: "brightness(40%)"      
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
    get: (id) => { getMovieById(id)(dispatch) } //
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
