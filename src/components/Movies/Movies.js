import React, { Component } from 'react';
import './Movies.scss';

export default class Movies extends Component {
  state = {
    movies: [
      {
          id: 1,
          title: 'Greyhound (2020)',
          description: 'A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.',
          image: require('../../assets/img/1.jpg'),
      },
      {
          id: 2,
          title: 'Ad Astra (2019)',
          description: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
          image: require('../../assets/img/2.jpg'),
      },
      {
        id: 3,
        title: 'Interstellar (2014)',
        description: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
        image: require('../../assets/img/3.jpg'),
    },
  ]
}

    render() {

      const movies = this.state.movies.map((item, index) => {
        return <div className='product' key={`prod-${index}`}>
            <img src={item.image} alt='#' />
            <div className='title'>{item.title}</div>
            <div className='description'>{item.description}</div>        
        </div>
     });

        return (
            <div className='movies'>
               {movies}
            </div>
        )
    }
}
