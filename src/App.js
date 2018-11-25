import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import WarehouseList from './components/WarehouseList';
import SideBar from './components/SideBar';
import InvList from './components/InvList';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar/>
          <div className="main">
            <NavBar />
            <Switch>
              <Route path='/warehouses' component={WarehouseList} />
              <Route path='/inventory' />
              <Route path='/warehouses/:id' />
              <Route path='/inventory/:id' component={InventoryDetails} />
              <Route path='/' component={InvList} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
