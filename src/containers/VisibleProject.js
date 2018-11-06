import { connect } from 'react-redux'
import Project from '../components/Project'
import { updateColor, updateProjectName, deleteProject } from '../actions'
import { isSameDay } from '../constants'

const mapStateToProps = (state, ownProps) => {

  let propKey = ownProps.match.params.projectKey

  let eventsArray = []

  for( let key in state.events){
    if( state.events[key].project === propKey )
      eventsArray.push({...state.events[key], id: key})
  }

  let eventsWDurations = eventsArray.map(event => ({
    ...event,
    duration: Math.round((event.end - event.start)/3600000)
  }))

  
  let daysChart = []

  for(let i=0; i<30; i++){
    let dayInSeconds = 86400000
    let date = new Date(Date.now() - dayInSeconds * i)
    let eventsOnDay = eventsWDurations.filter((event) => isSameDay(date, event.start))
   
    let hours = eventsOnDay.reduce((acc, x) => 
      acc + x.duration
    , 0)

    daysChart.push({
      date: date,
      hours: hours
    })
  }
  
  daysChart = daysChart.reverse()
  let hours = eventsWDurations.reduce((acc, x) => acc + x.duration, 0)

  let projectList = []

  for (let key in state.projects){
    if (key !== propKey){
      projectList.push({...state.projects[key], id: key})
    }
  }

  return ({
    project: state.projects[propKey], 
    totalHours: hours,
    daysChart: daysChart,
    projectList: projectList
  })
}

const mapDispatchToProps = dispatch => ({
  updateColor: (id, color) => dispatch(updateColor(id, color)),
  updateProjectName: (id, name) => dispatch(updateProjectName(id, name)),
  deleteProject: (id) => dispatch(deleteProject(id)),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Project)