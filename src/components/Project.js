import React from 'react'
import { Heading, Paragraph, Pane } from 'evergreen-ui'

const Project = ({projectName, hours}) => (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{projectName}</Heading>
    <Paragraph>The number of hours for that project is: {hours}</Paragraph>
  </Pane>
)

export default Project