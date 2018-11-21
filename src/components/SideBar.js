import React, { Component } from 'react'
import Location from './Location';
import Inventory from './Inventory';

export default class SideBar extends Component {

  render() {
    return (
      <aside className="sidebar">
        {/* will be changed to a <Link/> when completed */}
        <div className="sidebar__logo">
          <img src="/assets/wordmark/Wordmark.svg" alt=""></img>
        </div>
        <div className="sidebar__links sidebar__inventory">
          {/* <div>
            <img src="/assets/icons/Inventory.svg" alt=""></img>
          </div> */}
          <Inventory/>
          <h3>Inventory</h3>
        </div>
        <div className="sidebar__links sidebar__location">
          {/* <div>
            <img src="/assets/icons/Location.svg" alt=""></img>
          </div> */}
          <Location/>
          <h3>Location</h3>
        </div>
        <div className="sidebar__links sidebar__users">
          <div>
            <img src="/assets/icons/User.svg" alt=""></img>
          </div>
          <h3>Users</h3>
        </div>
      </aside>
    )
  }
}
