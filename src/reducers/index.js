import { combineReducers } from 'redux'
import events from './events'
import selectedEvent from './selectedEvent'

export default combineReducers({
  events,
  selectedEvent
})