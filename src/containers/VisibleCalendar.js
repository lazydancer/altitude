import { connect } from 'react-redux'
import { addEvent } from '../actions'
import Dnd from '../components/DraganddropCalendar'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = (dispatch) => ({
  newEvent: (title, start, end) => 
    dispatch(addEvent(title, start, end))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dnd)