import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'

import SideBar from './components/SideBar';
import MainComponent from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <SideBar/>
            <MainComponent/>
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
