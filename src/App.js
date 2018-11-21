import React, { Component } from 'react';
import './styles/App.css';
import InvList from './components/InvList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvList />
      </div>
    );
  }
}

export default App;
