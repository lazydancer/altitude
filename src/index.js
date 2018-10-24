import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import rootReducer from './reducers'
import './index.css'
import { loadState, saveState } from './localStorage'

import mockEvents from './mockEvents'

const persistedState = loadState();

const store = createStore(rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

store.subscribe(() => {
  saveState(store.getState());
})


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)
