import React, { Component } from 'react'
import InvList from './InvList';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom';
import InventoryDetails from './InventoryDetails.js';

export default class MainComponent extends Component {
  render() {
    return (
      <div className="main">
        {/* <InvList /> */}
        <NavBar />
        <Switch> 
          <Route path='/warehouses'/>
          <Route path='/inventory'/>
          <Route path='/warehouses/:id'/>
          <Route path='/inventory/:id' component={InventoryDetails}/>
          <Route path='/' component={InvList}/>
        </Switch>
      </div>
    )
  }
}
