import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Shop = () => { 
const [movies, setMovies] = useContext(MovieContext);
  return (
   <div>
     <h2>Shop Page</h2>
    </div>
  );
};


export default Shop;
