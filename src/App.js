import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Router, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/warehouses'/>
            <Route path='/inventory'/>
            <Route path='/warehouses/:id'/>
            <Route path='/inventory/:id'/>
            <Route path='/'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
