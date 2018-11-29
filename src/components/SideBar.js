import React, { Component } from 'react'
import LocationImg from './Image Components/LocationImg';
import InventoryImg from './Image Components/InventoryImg.js';
import UserImg from './Image Components/UserImg';
import { Link, withRouter } from 'react-router-dom';


class SideBar extends Component {

  render() {
    return (
      <aside className="sidebar">
        <Link to="/">
          <div className="sidebar__logo">
            <img src="/assets/wordmark/Wordmark.svg" alt="" className="logo__img"></img>
          </div>
        </Link>
        <Link to="/inventory">
          <div className="sidebar__links" >
            <InventoryImg/>
            <h3>Inventory</h3>
          </div>
        </Link>
        <Link to="/warehouses">
          <div className="sidebar__links">
            <LocationImg/>
            <h3>Location</h3>
          </div>
        </Link>
        <Link to="/">
          <div className="sidebar__links">
            <UserImg/>
            <h3>Users</h3>
          </div>
        </Link>
      </aside>
    )
  }
}

export default withRouter(SideBar)