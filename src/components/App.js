import React from 'react';
import Sidebar from './Sidebar'
import Dnd from './DraganddropCalendar'
import VisibleCalendar from '../containers/VisibleCalendar'

import './App.css';

const App = () => (
  <div className="App">
    <Sidebar /> 
    <VisibleCalendar />  
  </div>
)

export default App;
