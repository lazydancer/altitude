import React from 'react';
import Sidebar from './Sidebar'
import VisibleCalendar from '../containers/VisibleCalendar'
import VisibleInfo from '../containers/VisibleInfo'
import { Pane } from 'evergreen-ui'

import './App.css';

const App = () => (
  <div className="App">
    <Pane display="flex" height={800}>
      <Sidebar /> 
      <VisibleCalendar />
    </Pane>
      <VisibleInfo />

  </div>
)

export default App;
