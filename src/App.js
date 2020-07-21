import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import Header from './components/Header/Header';
import Movie from './components/Movies/Movies';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Movie />    
      </Router>
    </Provider>   
  );
}
export default App;
