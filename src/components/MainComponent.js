import React, { Component } from 'react'
import InvList from './InvList';
import NavBar from './NavBar';

export default class MainComponent extends Component {
  render() {
    return (
      <div className="main">
        <NavBar />
        <InvList />
      </div>
    )
  }
}
