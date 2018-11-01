import { combineReducers } from 'redux'
import events from './events'
import projects from './projects'
import modal from './modal'

export default combineReducers({
  events,
  projects,
  modal
})