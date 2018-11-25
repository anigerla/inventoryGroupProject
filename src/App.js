import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'

import SideBar from './components/SideBar';
import WarehouseInventoryList from './components/WarehouseInventoryList';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Router>
          <div className="container">
            <SideBar/>
            <MainComponent/>
=======
      <Router>
        <div className="App">
          <SideBar/>
            <div className="main">
              <NavBar/>
              <Switch> 
                <Route path='/warehouses' component={WarehouseInventoryList}/>
                <Route path='/inventory'/>
                <Route path='/warehouses/:id'/>
                <Route path='/inventory/:id' component={InventoryDetails}/>
                <Route path='/' component={InvList}/>
              </Switch>
            </div>
>>>>>>> development
          </div>
        </Router>
       
      
    );
  }
}

export default App;
