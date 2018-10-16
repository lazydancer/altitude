import React from 'react';
import Sidebar from './Sidebar'
import VisibleCalendar from '../containers/VisibleCalendar'
import VisibleInfo from '../containers/VisibleInfo'

import './App.css';

const App = () => (
  <div className="App">
    <Sidebar /> 
    <VisibleCalendar />
    <VisibleInfo />
  </div>
)

export default App;
