import { connect } from 'react-redux'
import Project from '../components/Project'



const isSameDay = (dateOne, dateTwo) => {
  return ( 
    dateOne.getDate() === dateTwo.getDate()
    && dateOne.getMonth() === dateTwo.getMonth()
    && dateOne.getFullYear() === dateTwo.getFullYear()
  )
}


const mapStateToProps = (state, ownProps) => {

  let events = state.events.filter(p => p.title === ownProps.match.params.projectName)

  let eventsWDurations = events.map(event => ({
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
    , 0.1)

    daysChart.push({
      date: date,
      hours: hours
    })
  }
  
  daysChart = daysChart.reverse()
  let hours = eventsWDurations.reduce((acc, x) => acc + x.duration, 0)

  return ({
    projectName: ownProps.match.params.projectName,
    events: events, 
    hours: hours,
    daysChart: daysChart
  })
}

export default connect(
  mapStateToProps, 
  null
)(Project)