import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './PopMovies.scss';
import { getMoviesAction } from '../../redux/actions/getMoviesAction';


class PopMovies extends Component {
  componentDidMount() {
    this.props.get();     
  } 

  render() {    
    const {movies} = this.props
    //console.log('popmovies', movies)
    return (
      <>
        <h2 className='main-title'>What's Popular</h2>
        <div className='movies'>
          {movies.length && movies.map((item, index) => {
            return (
              <div className='product' key={`prod-${index}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='' />
                <div className='title'>{item.original_title}</div>
                <div className='tagline'>{item.tagline}</div>                
                <div className='release_date'>{item.release_date}</div>                   
                <Link to={`/card/${item.id}`}><button className='btn' >Continue</button></Link>            
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    ...store.popular
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    get: () => { getMoviesAction(dispatch) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopMovies);
