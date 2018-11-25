import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'
import SideBar from './components/SideBar';
import WarehouseInventoryList from './components/WarehouseInventoryList';
import WarehouseList from './components/WarehouseList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar/>
            <div className="main">
              <NavBar/>
              <Switch> 
                <Route path='/warehouses/:id' component={WarehouseInventoryList}/>
                <Route path='/inventory/:id' component={InventoryDetails}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory'/>
                <Route path='/' component={InvList}/>
              </Switch>
            </div>
          </div>
        </Router>
       
      
    );
  }
}

export default App;
