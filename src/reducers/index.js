import { combineReducers } from 'redux'
import events from './events'
import selectedEvent from './selectedEvent'
import eventDialog from './eventDialog'
import projects from './projects'
import projectDialog from './projectDialog'


export default combineReducers({
  events,
  selectedEvent,
  eventDialog,
  projects,
  projectDialog
})