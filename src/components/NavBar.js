import React, { Component } from 'react';
import BackImg from './Image Components/BackImg';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <form className="navbar__form">
          <input type="text" placeholder="Search"></input>
        </form>
        <div className="navbar__user">
          <div></div>
          <div className="dropdownParent">
            <BackImg/>
            <div className="dropdownChild">
              <div className="dropdownChild--container">
                <div className="dropdwnSpanHolder">
                    <span>Profile</span> 
                </div>
                <div className="dropdwnSpanHolder">
                  <span>Sign Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
