import React from 'react'
import { Heading, Paragraph } from 'evergreen-ui'

const Project = (props) => (
  <div>  
    <Heading size={900}>{props.match.params.projectName}</Heading>
    <Paragraph>Hello</Paragraph>
  </div>
)

export default Project