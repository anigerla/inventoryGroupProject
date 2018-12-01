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

export default class App extends Component {
  //initialize state
  state={
    //list of inventory items is stored in a below empty array
    allInv:[]
  }

  //fetch request gets inventory list data from the backend 
  componentDidMount(){
    fetch(`${serverURL}${inventoryEP}`)
      .then(res=>res.json())
      .then(inv => this.setState({allInv:inv}))
      .catch(err=>console.log(err));
    console.log('mounted');
  }

  removeItem = (id) => {
    console.log(id);
    fetch(`http://localhost:8080/inventory/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(),
      })
      .then(response => response.json())
      alert(`item with ${id}`);  
      
    fetch(`http://localhost:8080/inventory`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return this.setState({ allInv: data })
        // alert("data loaded");
        // console.log("data finalised");
      
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <SideBar/>
            <div className="main">
              <NavBar/>
              <Switch> 
                <Route path='/warehouses/:warehouseId' exact render={(props)=><InvList itemsArray={this.state.allInv} warehouseId={props.match.params.warehouseId}/>}/>
                <Route path='/inventory/:id' exact render={(props)=><InventoryDetails itemsArray={this.state.allInv} id={props.match.params.id} />}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory' exact render={()=>{return <InvList itemsArray={this.state.allInv} removeItem={this.removeItem}/>}}/>
                <Route path='/' exact render={()=><Redirect to='/inventory'/>}/>
                {/* Are we adding not found page as well? */}
              </Switch>
            </div>
        </div>
      </Router>
       
      
    )}
}
