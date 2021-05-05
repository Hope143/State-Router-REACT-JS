import React from "react";
import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import {MovieProvider} from './MovieContext';

import About from './about';
import Shop from './shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {

  return (
    <Router>
    <MovieProvider>
    <div className="App">
          <Nav/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
            </Switch>
          <AddMovie/>
          <MovieList/>
    </div>
    </MovieProvider>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
