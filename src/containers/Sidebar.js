import React from 'react'
import { Button, TabNavigation, SidebarTab, Pane } from 'evergreen-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Sidebar = ({projectList}) => (
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
  <Button onClick={()=>console.log("ello")} appearance="minimal">Add Project</Button>
  </Pane>

)

const mapStateToProps = (state) => ({
  projectList: state.projects.map(a=>a.title)
})


export default connect(
  mapStateToProps, 
  null
)(Sidebar)