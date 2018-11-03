import React from 'react'
import { TabNavigation, SidebarTab, Pane, Icon } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newProjectModal } from '../actions'

const Sidebar = ({projectList, newProjectModal}) => (
  <Pane background="tint2" position="fixed" width={200} 
      height="100%">
    <TabNavigation width={200} padding={20} marginBottom={16}>
      <SidebarTab key='Today' is={Link} to={"/"} id='Today' marginBottom={30}>
        <Icon icon="star" marginRight={10} marginBottom={-3} />
        Today
      </SidebarTab>
      
      {projectList.map((tab, index) => (
        <SidebarTab
          key={index}
          is={Link}
          to={"/project/" + tab.id}
          id={tab.id}
          marginTop={tab.subProjects ? 20 : 0}
        >
          <Icon icon={tab.subProjects ? "box" : "symbol-circle"} 
                size={tab.subProjects ? 14 : 10} 
                marginRight={6} marginBottom={-1}/>
          {tab.title}
        </SidebarTab>
      ))}

      <SidebarTab marginTop={30} onClick={()=>newProjectModal()}>
        <Icon icon="add" marginRight={10} marginBottom={-3} /> 
        Add Project
      </SidebarTab>
    </TabNavigation>


  </Pane>
)

const projectListToDisplay = (projects) => {

  let projectKeys = []
  let collections = []

  for( let key in projects ){
    let project = projects[key]

    if(project.subProjects) {
      collections.push(key)
      collections = collections.concat(project.subProjects)
    } 
    
    projectKeys.push(key)
  } 

  let singleKeys = projectKeys.filter( x => collections.indexOf(x) < 0 )
  let resultKeys = singleKeys.concat(collections)

  let result = resultKeys.map(key => {
    let a = projects[key]
    a.id = key

    return a
  })

  console.log(result)

  return result

}

const mapStateToProps = (state) => {

  let projectsArray = []
  for( let key in state.projects ){
    projectsArray.push(state.projects[key])
  }

  return ({
    projectList: projectListToDisplay(state.projects),
  })
}

const mapDispatchToProps = (dispatch) => ({
  newProjectModal: () => dispatch(newProjectModal())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Sidebar)