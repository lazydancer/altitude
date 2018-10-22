import React from 'react'
import { Heading, Paragraph, Pane } from 'evergreen-ui'

const Project = ({projectName, events}) => {

console.log("input", events)

let hours = events.reduce(
  (acc, event) => {
    let eventHours = (event.end - event.start)/3600000
    return Math.round(eventHours) + acc
  }, 0
)

return (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{projectName}</Heading>
    <Paragraph>{hours} hours</Paragraph>
  </Pane>
)}

export default Project