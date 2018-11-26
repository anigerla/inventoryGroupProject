import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'
import SideBar from './components/SideBar';
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
                <Route path='/warehouses/:warehouseId' exact component={InvList}/>
                <Route path='/inventory/:id' exact component={InventoryDetails}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory' exact component={InvList}/>
                <Route path='/' exact component={InvList}/>
                {/* Are we adding not found page as well? */}
              </Switch>
            </div>
          </div>
        </Router>
       
      
    );
  }
}

export default App;
