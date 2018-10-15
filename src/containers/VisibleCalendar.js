import { connect } from 'react-redux'
import Dnd from '../components/DraganddropCalendar'

const mapStateToProps = state => ({
  events: state.events
})

export default connect(
  mapStateToProps, null
)(Dnd)