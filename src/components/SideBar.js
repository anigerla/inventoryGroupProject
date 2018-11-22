import React, { Component } from 'react'
import LocationImg from './Image Components/LocationImg';
import InventoryImg from './Image Components/InventoryImg.js';
import UserImg from './Image Components/UserImg';

export default class SideBar extends Component {

  render() {
    return (
      <aside className="sidebar">
        {/* will be changed to a <Link/> when completed */}
        <div className="sidebar__logo">
          <img src="/assets/wordmark/Wordmark.svg" alt=""></img>
        </div>
        <div className="sidebar__links sidebar__inventory">
          <InventoryImg/>
          <h3>Inventory</h3>
        </div>
        <div className="sidebar__links sidebar__location">
          <LocationImg/>
          <h3>Location</h3>
        </div>
        <div className="sidebar__links sidebar__users">
          <UserImg/>
          <h3>Users</h3>
        </div>
      </aside>
    )
  }
}
