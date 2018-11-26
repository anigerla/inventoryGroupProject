import React, { Component } from 'react'
import LocationImg from './Image Components/LocationImg';
import InventoryImg from './Image Components/InventoryImg.js';
import UserImg from './Image Components/UserImg';
import { Link } from 'react-router-dom';
export default class SideBar extends Component {

  render() {
    return (
      <aside className="sidebar">
        <Link to="/">
          <div className="sidebar__logo">
            <img src="/assets/wordmark/Wordmark.svg" alt="" className="logo__img"></img>
          </div>
        </Link>
        <Link to="/">
          <div className="sidebar__links sidebar__inventory">
            <InventoryImg/>
            <h3>Inventory</h3>
          </div>
        </Link>
        <Link to="/warehouses">
          <div className="sidebar__links sidebar__location">
            <LocationImg/>
            <h3>Location</h3>
          </div>
        </Link>
        <div className="sidebar__links sidebar__users">
          <UserImg/>
          <h3>Users</h3>
        </div>
      </aside>
    )
  }
}
