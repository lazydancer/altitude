import React from 'react'
import { TabNavigation, SidebarTab } from 'evergreen-ui'

const Sidebar = () => (
  <TabNavigation width={200} padding={20} marginBottom={16}>
    {['Today', 'Week', '---------', 'Sleep', 'Eat', 'Altitude', 'Job Search'].map((tab, index) => (
      <SidebarTab
        key={tab}
        is="a"
        href="#"
        id={tab}
        isSelected={index === 0}
      >
        {tab}
      </SidebarTab>
    ))}
</TabNavigation>

)

export default Sidebar