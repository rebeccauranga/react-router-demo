import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';

import {
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/* Link is what you use instead of an anchor */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/cats">Cats</Link>
     <Route exact path='/' component={Home} />
     <Route path='/about' component={About} />
     <Route path='/cats' component={Cats} />
    </div>
  );
}

export default App;
