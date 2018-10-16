import React from 'react';
import Sidebar from './Sidebar'
import VisibleCalendar from '../containers/VisibleCalendar'
import Info from './Info'

import './App.css';

const App = () => (
  <div className="App">
    <Sidebar /> 
    <VisibleCalendar />
    <Info />
  </div>
)

export default App;
