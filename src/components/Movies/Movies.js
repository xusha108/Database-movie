import React, { Component } from "react";
import { connect } from "react-redux";

import "./Movies.scss";
import { getMovies } from "../../redux/actions/getMovies";


class Movies extends Component {
  componentDidMount() {
    this.props.get();  
  } 

  render() {
    console.log(this.props)
    return (
      <div className="movies">
        {this.props.movies.map((item, index) => {
          return (
            <div className="product" key={`prod-${index}`}>
              <img src={item.poster_path} alt='' />
              <div className="title">{item.original_title}</div>
              <div className="tagline">{item.tagline}</div>
              <div className="description">{item.overview}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    ...store
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    get: () => { getMovies(dispatch) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
