import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Movie from './components/Movies/Movies';


const App = () => {
  return (   
    <Router>
      <Header/>
      <Movie />    
    </Router>
  );
}
export default App;
