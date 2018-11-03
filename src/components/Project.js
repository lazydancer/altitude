import React from 'react'
import { Heading, Paragraph, Pane, Strong } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'


const Project = ({projectName, events, totalHours, daysChart}) => (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{projectName}</Heading>
    <Paragraph marginBottom={20}><Strong>{totalHours}</Strong> hours</Paragraph>
    <BarChart  width={300} height={80} data={daysChart}>
      <Bar dataKey='hours' 
           onClick={() => alert("Hi!")}
      >
      {daysChart.map((entry, index) => (
        <Cell cursor="pointer" 
              fill={index === 0 ? '#1070CA' : '#1070CA' } 
              key={`cell-${index}`}
        />
      ))}
      </Bar>
    </BarChart>
  </Pane>

)

export default Project