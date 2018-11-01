import { connect } from 'react-redux'
import { newEventModal, moveEvent, selectEvent, selectEventModal } from '../actions'
import Calendar from '../components/Calendar'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  newEventModal: event => {
    dispatch(newEventModal(event.start, event.end))
  },

  moveEvent: ({ event, start, end }) => {
    dispatch(moveEvent(event.id, start, end))
  },

  selectEvent: (event) => {
    dispatch(selectEvent(event))
  },

  selectEventModal: ({id}) => {
    dispatch(selectEventModal(id))
  },
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)