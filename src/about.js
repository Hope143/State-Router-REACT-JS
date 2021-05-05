import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const About = () => { 
const [movies, setMovies] = useContext(MovieContext);
  return (
   <div>
     <h2>About Us</h2>
    </div>
  );
};


export default About;
