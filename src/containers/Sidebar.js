import React from 'react'
import { TextInput, Dialog, TabNavigation, SidebarTab, Pane, Pill } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProject, toggleProjectDialog, newProjectModal } from '../actions'


const Sidebar = ({emptySpots, projectList, projectDialog, addProject, newProjectModal}) => (
  <Pane background="tint2" position="fixed" width={200} height="100%">
    <TabNavigation width={200} padding={20} marginBottom={16}>
      <SidebarTab key='Today' is={Link} to={"/"} id='Today'>
        Today
        <Pill display="inline-flex" margin={8} 
              color={emptySpots === 0 ? "green" : "red"} 
              isSolid={emptySpots !== 0}>{emptySpots}
        </Pill>
      </SidebarTab>
      <SidebarTab key='Space' id='Space'></SidebarTab>
      {projectList.map((tab, index) => (
        <SidebarTab
          key={tab}
          is={Link}
          to={"/project/" + tab}
          id={tab}
        >
          {tab}
        </SidebarTab>
      ))}
      <SidebarTab onClick={()=>newProjectModal()}>+ Add Project</SidebarTab>
    </TabNavigation>


  </Pane>


)

const emptySpots = (events) => { //This does not check over lapping

  let todayDate = new Date()

  let todayEvents = events.filter(
    x => {
      let clone = new Date(x.start)
      return clone.setHours(0,0,0,0) === todayDate.setHours(0,0,0,0)
    }
  )
  let hours = todayEvents.reduce((acc, x) =>
    acc + ((x.end - x.start) / 3600000), 0)
  
  return Math.round(24 - hours) 

}

const mapStateToProps = (state) => ({
  projectList: state.projects.map(a=>a.title),
  projectDialog: state.projectDialog,
  emptySpots: emptySpots(state.events)
})

const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  newProjectModal: () => dispatch(newProjectModal())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Sidebar)