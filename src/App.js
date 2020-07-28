import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import Header from './components/Header/Header';
import PopMovies from './components/Movies/PopMovies';
import MovieCard from './components/Movies/MovieCard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>      
        <Route exact path="/" component={PopMovies} />    
        <Route path="/card/:id" component={MovieCard} />    
      </Router>
    </Provider>   
  );
}
export default App;
