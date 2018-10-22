import { connect } from 'react-redux'
import Project from '../components/Project'

const mapStateToProps = (state, ownProps) => ({
  projectName: ownProps.match.params.projectName,
  events: state.events.filter(p => p.title === ownProps.match.params.projectName) 
})

export default connect(
  mapStateToProps, 
  null
)(Project)