import { connect } from 'react-redux'
import { addEvent, moveEvent, selectEvent } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  newEvent: (event) => {
    dispatch(addEvent("new event", event.start, event.end))
  },

  moveEvent: ({ event, start, end }) => {
    dispatch(moveEvent(event.id, start, end))
  },

  selectEvent: (event) => {
    dispatch(selectEvent(event.id))
  }
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)