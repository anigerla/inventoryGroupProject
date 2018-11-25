import React, { Component } from 'react'
import InvList from './InvList';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import InventoryDetails from './InventoryDetails.js'
import WarehouseList from './WarehouseList';

export default class MainComponent extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <Switch>
          <Route path='/warehouses' component={WarehouseList}/>
          <Route path='/inventory' />
          <Route path='/warehouses/:id' />
          <Route path='/inventory/:id' component={InventoryDetails} />
          <Route path='/' component={InvList} />
        </Switch>
      </div>
    )
  }
}
