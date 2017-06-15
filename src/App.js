import React, { Component } from 'react';
import Header from './Components/Header.js';
import Tables from './Components/Tables.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tables />
      </div>
    );
  }
}

export default App;
