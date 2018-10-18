import React from 'react';
import Sidebar from './Sidebar'
import VisibleCalendar from '../containers/VisibleCalendar'

import Main from './Main'
import { Pane } from 'evergreen-ui'

import './App.css';

const App = () => (
  <div className="App">
    <Pane display="flex" height={800}>
      <Sidebar /> 
      <Main />
    </Pane>
  </div>
)

export default App;
