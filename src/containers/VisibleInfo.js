import { connect } from 'react-redux'
import Info from '../components/Info'
import { updateEvent, unSelectEvent, deleteEvent } from '../actions'

const mapStateToProps = state => ({
  selectedEvent: state.selectedEvent,
  projectList: state.projects.map(a => a.title)
})


const mapDispatchToProps = dispatch => ({
  updateEvent: (id, title, start, end) => dispatch(updateEvent(id, title, start, end)),
  closeEvent: () => dispatch(unSelectEvent()),
  deleteEvent: id => dispatch(deleteEvent(id))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Info)