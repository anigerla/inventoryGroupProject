import React, { Component } from 'react';
import './styles/App.css';
import './styles/index.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import InventoryDetails from './components/InventoryDetails.js'
import InvList from './components/InvList.js'
import SideBar from './components/SideBar';
import WarehouseList from './components/WarehouseList';
import Footer from './components/Footer';

const serverURL = 'http://localhost:8080/';
const inventoryEP = 'inventory/';
const warehouseEP = 'warehouses/';


export default class App extends Component {
  state = {
    allInv: []
  }

  postWarehouse = (warehouseObject) => {
    //taking in a warehouse object that is sent from the AddWarehouse Component
    const init = {
      body: JSON.stringify(warehouseObject),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    };
    fetch(`${serverURL}${warehouseEP}`, init)
      .then((resp) => resp.json())
      .then((data) => {
        // call GET for new data once set up
        console.log(data);
        //refresh warehouses if submit is successful
        window.location.reload();
      })
      .catch((err) => { console.error("Caught error: ", err) });
  }

  componentDidMount(){
    fetch(`${serverURL}${inventoryEP}`)
      .then(res=>res.json())
      .then(inv => this.setState({allInv:inv}))
      .catch(err=>console.log(err));
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
      // alert(`item with ${id}`);  
    .then( () => { 
    fetch(`http://localhost:8080/inventory`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        return this.setState({ allInv: data })
        // alert("data loaded");
        // console.log("data finalised");
      });
    }) 
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
                <Route path='/inventory/:id' exact render={(props)=>{
                  let targetItem = this.state.allInv.find(inv=>inv.id===props.match.params.id);
                  return <InventoryDetails item={targetItem} id={props.match.params.id}/>}}/> 
                <Route path='/warehouses' exact render={(props) => { return <WarehouseList {...props} postWarehouse={this.postWarehouse} /> }} />
                <Route path='/inventory' exact render={() => { return <InvList itemsArray={this.state.allInv} removeItem={this.removeItem}/>}} />
                <Route path='/' exact render={()=><Redirect to='/inventory'/>}/>
              </Switch>
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}
