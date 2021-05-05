import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movie, setMovie] = useContext(MovieContext);

  const getName = e => {
    setName(e.target.value);
  };

  const getPrice = e => {
    setPrice(e.target.value);
  };

  const updateAll = e => {
    e.preventDefault();
    setMovie(prevMovie => [...prevMovie, {name: name, price:price}]);
  };

  return (
    <form onSubmit={updateAll}>
      <input type="text" name="name" value={name} onChange={getName}/>
      <input type="text" name="price" value={price} onChange={getPrice}/>
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;