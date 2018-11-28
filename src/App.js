import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'
import SideBar from './components/SideBar';
import WarehouseList from './components/WarehouseList';
const serverURL = 'http://localhost:8080/';
const inventoryEP = 'inventory/';
const warehouseEP = 'warehouses/';


class App extends Component {
<<<<<<< HEAD

  postWarehouse = (warehouseObject) => {
    //taking in a warehouse object that is sent from the AddWarehouse Component
    console.log(warehouseObject)
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


||||||| merged common ancestors
=======

  state={
    allInv:[]
  }
  componentDidMount(){
    fetch(`${serverURL}${inventoryEP}`)
      .then(res=>res.json())
      .then(inv => this.setState({allInv:inv}))
      .catch(err=>console.log(err));
    console.log('mounted');
  }
>>>>>>> development
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar/>
            <div className="main">
              <NavBar/>
              <Switch> 
<<<<<<< HEAD
                <Route path='/warehouses/:warehouseId' exact component={InvList}/>
                <Route path='/inventory/:id' exact component={InventoryDetails}/>
                <Route path='/warehouses' exact render={(props) => { return <WarehouseList {...props} postWarehouse={this.postWarehouse}/>}} />
                <Route path='/inventory' exact component={InvList}/>
||||||| merged common ancestors
                <Route path='/warehouses/:warehouseId' exact component={InvList}/>
                <Route path='/inventory/:id' exact component={InventoryDetails}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory' exact component={InvList}/>
=======
                <Route path='/warehouses/:warehouseId' exact render={(props)=><InvList itemsArray={this.state.allInv}
                                                            warehouseId={props.match.params.warehouseId}/>}/>
                <Route path='/inventory/:id' exact render={(props)=><InventoryDetails itemsArray={this.state.allInv}
                                                            id={props.match.params.id}/>}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory' exact render={()=>{return <InvList itemsArray={this.state.allInv}/>}}/>
>>>>>>> development
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
