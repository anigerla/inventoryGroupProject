import React, { Component } from 'react'
import InvList from './InvList';

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
        <InvList itemsArray = {this.state.itemsArray}/>
      </div>
    )
  }
}
