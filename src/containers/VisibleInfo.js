import { connect } from 'react-redux'
import Info from '../components/Info'

const mapStateToProps = state => ({
  selectedEvent: state.selectedEvent
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Info)