import React, { Component } from 'react';
import BackImg from './Image Components/BackImg';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <form className="navbar__form">
          <input type="text" placeholder="Seach"></input>
        </form>
        <div className="navbar__user">
          <div></div>
          <BackImg/>
        </div>
      </nav>
    )
  }
}
