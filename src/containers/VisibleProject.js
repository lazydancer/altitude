import { connect } from 'react-redux'
import Project from '../components/Project'

const mapStateToProps = (state, ownProps) => ({
  projectName: ownProps.match.params.projectName,
  hours: state.projects.find(p => p.title === ownProps.match.params.projectName).hours
})

export default connect(
  mapStateToProps, 
  null
)(Project)