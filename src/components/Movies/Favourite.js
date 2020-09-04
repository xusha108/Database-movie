import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../Movies/Favourite.scss';
import RemoveItem from '../../assets/img/removeItem.png';
import { connect } from 'react-redux';
import {addFavouriteMovies, removeFavouriteMovies} from '../../redux/actions/addFavoriteMovies';
import {getMovieById} from '../../redux/actions/getMovieById';
import {getMoviesAction} from '../../redux/actions/getMoviesAction';


class Favourite extends Component {

  removeFavouriteId  = (id) => { 
    this.props.remove(id)    
    console.log('id', id)
  };

  componentDidMount() {
    this.props.get();     
  }

  render() { 
    const {movies} = this.props; 
   // console.log('popMovies', movies)

    localStorage.getItem ('favouriteId');
    const storageFavourite = localStorage.favouriteId.split(',').map( (item) => {
         return parseInt(item)
    });  

    const favMovies =  movies.length && movies.map( (item, index) => {
        if (storageFavourite.includes(item.id)) {         
          return <div className='favourite-item' // className={(storageFavourite === item.id) ? 'favourite-item' : 'remove'}
           key={`fav-${index}`}
           >           
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width={'100px'} alt='' />                          
              <div className='title'>{item.original_title}</div>              
              <Link to={`/card/${item.id}`}><button className='btn' >Continue</button></Link>               
              <img className='remove' alt='removeItem' src={RemoveItem} onClick={() => {this.removeFavouriteId(item.id)}}/>
          </div>
         }
        }
      );  
   
    return (
      <div>
        <h2>Favourite movies</h2>       
         <div className='favourite'>
           {favMovies}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {  
  return {
    ...store.popular,
    ...store.getMovieById,
    favourites: store.favourite.movies
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    get: () => { getMoviesAction(dispatch) },
    getId: (id) => { getMovieById(id)(dispatch) }, 
    add: (id) => { dispatch(addFavouriteMovies(id)) } ,
    remove: (id) => { dispatch(removeFavouriteMovies(id)) }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);