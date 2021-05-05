import React, {useState} from 'react';
import { MovieContext } from './MovieContext';

const MovieList = ({name, price}) => { //pinalitan yung props

  return (
   <div>
     <h3>{name}</h3>
     <p>{price}</p>
    </div>
  );
};


export default MovieList;
