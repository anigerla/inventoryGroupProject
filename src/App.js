import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'
import SideBar from './components/SideBar';
import WarehouseList from './components/WarehouseList';

class App extends Component {

  postWarehouse = (warehouseObject) => {
    //taking in a warehouse object that is sent from the AddWarehouse Component
    const init = {
      body: JSON.stringify(warehouseObject),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    };
    fetch("http://localhost:8080/warehouses/", init)
      .then((resp) => resp.json())
      .then((data) => {
        // call GET for new data once set up
        console.log(data)
      })
      .catch((err) => { console.error("Caught error: ", err) });
  }


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
                <Route path='/warehouses' exact render={(props) => { return <WarehouseList {...props} postWarehouse={this.postWarehouse}/>}} />
                <Route path='/inventory' exact component={InvList}/>
                <Route path='/' exact render={()=><Redirect to='/inventory'/>}/>
                {/* Are we adding not found page as well? */}
              </Switch>
            </div>
          </div>
        </Router>
       
      
    );
  }
}

export default App;
