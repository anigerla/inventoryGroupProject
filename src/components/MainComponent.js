import React, { Component } from 'react'
import InvList from './InvList';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom';
import InventoryDetails from './InventoryDetails.js';

export default class MainComponent extends Component {

  //initialize state
  state = {
    itemsArray: []
    //figure out how the array picks up data from the backend file (fetch?)
    //in Brainflix why one is an object and another an array? Does it matter or the program can pick up the data anyway?
  };

  // componentDidMount {
  //   fetch get request for InvList data
  //   fet get request for WarehouseList data
  // }

  render() {
    return (
      <div className="main">
        <NavBar />
        {/* <InvList itemsArray = {this.state.itemsArray}/> */}
        <InvList />
        <Switch>
          <Route path='/warehouses' component={WarehouseList}/>
          <Route path='/inventory' component={InvList}/>
          <Route path='/warehouses/:id' />
          <Route path='/inventory/:id' component={InventoryDetails} />
          <Route path='/' component={InvList} />
        </Switch>
      </div>
    )
  }
}