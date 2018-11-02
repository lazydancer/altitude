import React from 'react'
import { TabNavigation, SidebarTab, Pane, Pill, Icon } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProject, newProjectModal } from '../actions'

const Sidebar = ({emptySpots, projectList, projectDialog, addProject, newProjectModal}) => (
  <Pane background="tint2" position="fixed" width={200} height="100%">
    <TabNavigation width={200} padding={20} marginBottom={16}>
      <SidebarTab key='Today' is={Link} to={"/"} id='Today'>
        <Icon icon="star" marginRight={10} marginBottom={-3} />
        Today
     
      </SidebarTab>
      <SidebarTab key='calendar' is={Link} to={"/"} id='Today' marginBottom={30}>
        <Icon icon="calendar" marginRight={10} marginBottom={-3} />
        Review
     
      </SidebarTab>

      {projectList.map((tab, index) => (

        <SidebarTab
          key={index}
          is={Link}
          to={"/project/" + tab}
          id={tab}
        >
          <Icon icon="symbol-circle" size={10} marginRight={6} marginBottom={-1}/>
          {tab}
        </SidebarTab>
      ))}

      <SidebarTab key='1' marginTop={20}>
          <Icon icon="box" size={14} marginRight={6} marginBottom={-1}/>
          Work
        </SidebarTab>

      {projectList.map((tab, index) => (

        <SidebarTab
          key={index}
          is={Link}
          to={"/project/" + tab}
          id={tab}
        >
          <Icon icon="symbol-circle" size={10} marginRight={6} marginBottom={-1}/>
          {tab}
        </SidebarTab>
      ))}

      <SidebarTab key='1'  marginTop={20} >
          <Icon icon="box" size={14} marginRight={6} marginBottom={-1}/>
          Personal
        </SidebarTab>

      {projectList.map((tab, index) => (

        <SidebarTab
          key={index}
          is={Link}
          to={"/project/" + tab}
          id={tab}
        >
          <Icon icon="symbol-circle" size={10} marginRight={6} marginBottom={-1}/>
          {tab}
        </SidebarTab>
      ))}

      <SidebarTab marginTop={30} onClick={()=>newProjectModal()}>
        <Icon icon="add" marginRight={10} marginBottom={-3} /> 
        Add Project
      </SidebarTab>
    </TabNavigation>


  </Pane>
)



/*
   <Pill display="inline-flex" marginLeft={8} 
              color={emptySpots === 0 ? "green" : "red"} 
              isSolid={emptySpots !== 0}>{emptySpots} 
        </Pill>
*/
const emptySpots = (events) => { //This does not check over lapping

  let todayDate = new Date()

  let eventsArray = []
  for( let key in events){
    eventsArray.push({...events[key], id: key})
  }

  let todayEvents = eventsArray.filter(
    x => {
      let clone = new Date(x.start)
      return clone.setHours(0,0,0,0) === todayDate.setHours(0,0,0,0)
    }
  )
  let hours = todayEvents.reduce((acc, x) =>
    acc + ((x.end - x.start) / 3600000), 0)
  
  return Math.round(24 - hours) 

}

const mapStateToProps = (state) => {

  let projectsArray = []
  for( let key in state.projects ){
    projectsArray.push(state.projects[key].title)
  }

  return ({
    projectList: projectsArray,
    emptySpots: emptySpots(state.events)
  })
}

const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  newProjectModal: () => dispatch(newProjectModal())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Sidebar)