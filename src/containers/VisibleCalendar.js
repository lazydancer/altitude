import { connect } from 'react-redux'
import { newEventModal, updateEvent, selectEventModal, copyDay } from '../actions'
import Calendar from '../components/Calendar'


const mapStateToProps = state => {

  let eventsArray = []

  for( let key in state.events){
    let projectParent = state.projects[state.events[key].project]
    if (projectParent){ 
      eventsArray.push(
        {...state.events[key], 
          id: key,
          title: projectParent.title,
          color: projectParent.color})
    } else {
      eventsArray.push({...state.events[key], id: key })
    }
  }
  return ({
    events: eventsArray
  })
}

const mapDispatchToProps = dispatch => ({
  newEventModal: event => {
    dispatch(newEventModal(event.start, event.end))
  },

  moveEvent: ({ event, start, end }) => {
    dispatch(updateEvent(event.id, event.project, start, end))
  },

  selectEventModal: ({id}) => {
    dispatch(selectEventModal(id))
  },

  copyToToday: (fromDate) => {
    dispatch(copyDay(fromDate, new Date()))
  }
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Calendar)