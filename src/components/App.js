import React from 'react';
import { Pane } from 'evergreen-ui'
import Main from './Main'
import Sidebar from '../containers/Sidebar'

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
