import React from 'react'
import { TextInput, Dialog, Button, TabNavigation, SidebarTab, Pane } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addProject, toggleProjectDialog } from '../actions'

let input = ""

const Sidebar = ({projectList, projectDialog, addProject, toggleProjectDialog}) => (
  <Pane background="tint2">
    <Button appearance="minimal" marginTop={20} marginLeft={4}>Today</Button>
    <TabNavigation width={200} padding={20} marginBottom={16}>
      {projectList.map((tab, index) => (
        <SidebarTab
          key={tab}
          is={Link}
          to={"/project/" + tab}
          id={tab}
          isSelected={index === 0}
        >
          {tab}
        </SidebarTab>
      ))}
    </TabNavigation>
    <Button onClick={()=>toggleProjectDialog()} appearance="minimal">Add Project</Button>
  
    <Dialog
      isShown={projectDialog}
      title="Add Project"
      onCloseComplete={() => {
        addProject(input)
        toggleProjectDialog()
      }}
    >
      <TextInput
        name="text-input-name"
        placeholder="Text input placeholder..."
        onChange={e => { input = e.target.value }}
      />  

    </Dialog> 

  </Pane>


)

const mapStateToProps = (state) => ({
  projectList: state.projects.map(a=>a.title),
  projectDialog: state.projectDialog
})

const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
  toggleProjectDialog: () => dispatch(toggleProjectDialog())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(Sidebar)