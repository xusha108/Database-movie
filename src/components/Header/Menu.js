import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Menu = () => {
  const menu = [
    'all movies',
    'popular movies',
    'more',    
    ];

  return (
    <div className="header-links">
      <div className='header-menu'>
        {menu.map((item, index) =>
          <Link to={`/${item === 'home' ? '' : item}`} key={index} className='menu-items'>
            {item}           
          </Link>
        )}
      </div>      
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.string
};

export default Menu;



