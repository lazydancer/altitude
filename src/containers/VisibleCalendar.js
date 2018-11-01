import { connect } from 'react-redux'
import { newEventModal, updateEvent, selectEventModal } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  // Event to Dic, interfacing with calendar
  let eventsArray = []

  for( let key in state.events){
    eventsArray.push({...state.events[key], id: key})
  }

  return ({
    events: eventsArray
  })
}

const mapDispatchToProps = dispatch => ({
  newEventModal: event => {
    dispatch(newEventModal(event.start, event.end))
  },

  moveEvent: ({ event, start, end }) => {
    dispatch(updateEvent(event.id, event.title, start, end))
  },

  selectEventModal: ({id}) => {
    dispatch(selectEventModal(id))
  },
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)