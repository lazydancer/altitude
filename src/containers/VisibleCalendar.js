import { connect } from 'react-redux'
import { addEvent, moveEvent } from '../actions'
import Calendar from '../components/DraganddropCalendar'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  newEvent: (event) => {
    dispatch(addEvent("new event", event.start, event.end))
  },

  resizeEvent: ({ event, start, end }) => {
    dispatch(moveEvent(event.id, start, end))
  }



})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)