import React from 'react'
import { TabNavigation, SidebarTab, Pane } from 'evergreen-ui'
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <Pane background="tint2">
  <TabNavigation width={200} padding={20} marginBottom={16}>
    {['Today', 'Week', '---------', 'Sleep', 'Eat', 'Altitude', 'Job Search', '----------', 'Settiings'].map((tab, index) => (
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
</Pane>

)

export default Sidebar