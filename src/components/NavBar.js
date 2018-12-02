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
          <div class="dropdownParent">
            <BackImg/>
            <div class="dropdownChild">
              {/* <div class="dropdownChild--container"> */}
                <div class="dropdwnSpanHolder">
                    <span>Profile</span> 
                </div>
                <div class="dropdwnSpanHolder">
                  <span>Sign Out</span>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
