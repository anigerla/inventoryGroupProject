import React, { Component } from 'react'
import InvList from './InvList';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom';
import InventoryDetails from './InventoryDetails.js';

export default class MainComponent extends Component {

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