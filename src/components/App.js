import React from 'react';
import { Pane } from 'evergreen-ui'
import Main from './Main'
import Sidebar from '../containers/Sidebar'
import RootModal from '../containers/RootModal'

import './App.css';

const App = () => (
  <div className="App">
    <Pane display="flex">
      <Sidebar /> 
      <Main />
      <RootModal />
    </Pane>
  </div>
)

export default App;
