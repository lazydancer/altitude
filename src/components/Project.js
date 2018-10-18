import React from 'react'
import { Heading, Paragraph, Pane } from 'evergreen-ui'

const Project = (props) => (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{props.match.params.projectName}</Heading>
    <Paragraph>Hello</Paragraph>
  </Pane>
)

export default Project