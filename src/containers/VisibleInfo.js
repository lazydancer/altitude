import { connect } from 'react-redux'
import Info from '../components/Info'
import { updateEvent } from '../actions'

const mapStateToProps = state => ({
  selectedEvent: state.selectedEvent
})


const mapDispatchToProps = dispatch => ({
  updateEvent: (id, title, start, end) => dispatch(updateEvent(id, title, start, end))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Info)