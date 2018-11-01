import { connect } from 'react-redux'
import { newEventModal, moveEvent, selectEventModal } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => {
  // Event to Dic, interfacing with calendar
  let eventsArray = []

  for( let key in state.events){
    eventsArray.push({...state.events[key], id: key})
  }

  console.log(state.events)
  console.log(eventsArray)
  return ({
    events: eventsArray
  })
}

const mapDispatchToProps = dispatch => ({
  newEventModal: event => {
    dispatch(newEventModal(event.start, event.end))
  },

  moveEvent: ({ event, start, end }) => {
    dispatch(moveEvent(event.id, start, end))
  },

  selectEventModal: ({id}) => {
    dispatch(selectEventModal(id))
  },
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)