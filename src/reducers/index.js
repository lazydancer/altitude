import { combineReducers } from 'redux'
import events from './events'
import selectedEvent from './selectedEvent'
import projects from './projects'

export default combineReducers({
  events,
  selectedEvent,
  projects,
})