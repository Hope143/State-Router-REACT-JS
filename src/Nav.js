import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';
import {Link, withRouter} from 'react-router-dom';


const Nav = () => { 
const [movies, setMovies] = useContext(MovieContext);

const navstyle = {
    color: 'white'
  };

  return (

   <div className="Nav-container">
     <h3>Dev Ed</h3>
          <ul className="nav-links">
              <Link style={navstyle} to='/about'>
                  <li>About</li>
              </Link>
              <Link style={navstyle} to='/shop'>
                  <li>Shop</li>
              </Link>
            
          </ul>
     <p>List of Movies: {movies.length}</p>
     
    </div>

  );
};


export default Nav;
