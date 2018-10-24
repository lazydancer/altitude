import React from 'react'
import { Heading, Paragraph, Pane, Strong } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'


const Project = ({projectName, events, hours, daysChart}) => (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{projectName}</Heading>
    <Paragraph><Strong>{hours}</Strong> hours</Paragraph>
    <BarChart width={400} height={80} data={daysChart}>
      <Bar dataKey='hours' 
           onClick={() => alert("Hi!")}
      >
      {daysChart.map((entry, index) => (
        <Cell cursor="pointer" 
              fill={index === 0 ? '#265985' : '#3174ad' } 
              key={`cell-${index}`}
        />
      ))}
      </Bar>
    </BarChart>
  </Pane>
)

export default Project