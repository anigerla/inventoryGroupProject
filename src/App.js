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
const warehouseEP = 'warehouse/';


class App extends Component {

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
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar/>
            <div className="main">
              <NavBar/>
              <Switch> 
                <Route path='/warehouses/:warehouseId' exact render={(props)=><InvList itemsArray={this.state.allInv}
                                                            id={props.match.params.warehouseId}/>}/>
                <Route path='/inventory/:id' exact render={(props)=><InventoryDetails itemsArray={this.state.allInv}
                                                            id={props.match.params.id}/>}/>
                <Route path='/warehouses' exact component={WarehouseList}/>
                <Route path='/inventory' exact render={()=>{return <InvList itemsArray={this.state.allInv}/>}}/>
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
