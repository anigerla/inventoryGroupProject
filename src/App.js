import React, { Component } from 'react';
import './styles/App.css';
import SideBar from './components/SideBar';
import MainComponent from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <MainComponent />
      </div>
    );
  }
}

export default App;
