import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import PageNotFound from './PageNotFound';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // I *definitely* have access to the instance
    // I will use .bind to "lock in" the value of `this`
    this._incrementCount = this._incrementCount.bind(this);
    // Functions are "callable" objects.
    // As an object, they can have methods.
    // One if their methods is .bind
    // .bind returns a new copy of the function, with the value of `this` locked in
  }

  render() {
    return (
      <div className="App">
      <h1>{this.state.counter}</h1>
      <button onClick={this._incrementCountUsingArrow}>Increment</button>
      <br />
      {/* Link is what you use instead of an anchor */}
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/cats">Cats</Link>
      <br />
      <Link to="/nowhere">This goes nowhere</Link>
      <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/about' component={About} />
        <Route path='/cats' component={Cats} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    );
  }

  // "normal" method
  _incrementCount() {
    console.log('App: _incrementCount got called');
    console.log(this);
    debugger;
    this.setState({
      counter: this.state.counter + 1
    });
  }

  // Arrow functions give you "auto .bind"
  _incrementCountUsingArrow = () => {
    console.log('App: _incrementCountUsingArrow got called');
    this.setState({
      counter: this.state.counter + 1
    });
  }

}


export default App;
