import { connect } from 'react-redux'
import EventSelector from '../components/EventSelector'
import { updateEvent } from '../actions'

const mapStateToProps = state => ({
  eventDialog: state.eventDialog,
  projectList: state.projects
})


const mapDispatchToProps = dispatch => ({
  updateEvent: (id, title, start, end) => dispatch(updateEvent(id, title, start, end)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(EventSelector)