import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Router, Link, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import SideBar from './components/SideBar.js';
import InventoryDetails from './components/InvetoryDetails.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar/>
            <SideBar/> 
            <Switch> 
              <Route path='/warehouses'/>
              <Route path='/inventory'/>
              <Route path='/warehouses/:id'/>
              <Route path='/inventory/:id' component={InventoryDetails}/>
              <Route path='/'/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
