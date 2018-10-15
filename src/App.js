import React, { Component } from 'react';

import Sidebar from './Sidebar'
import Dnd from './DraganddropCalendar'


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Sidebar /> 
        <Dnd />
        
      </div>
    );
  }
}



export default App;
