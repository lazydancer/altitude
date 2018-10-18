import { combineReducers } from 'redux'
import events from './events'
import selectedEvent from './selectedEvent'
import projects from './projects'
import projectDialog from './projectDialog'

export default combineReducers({
  events,
  selectedEvent,
  projects,
  projectDialog
})