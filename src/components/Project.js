import React, {Component} from 'react'
import { Heading, Paragraph, Pane, Strong, SelectField, Button, SelectMenu } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'
import { Colors } from '../constants'


const Project = ({project, totalHours, daysChart, projectList, updateColor}) => (
  <Pane padding={20}>  
    
    <Heading size={900} color={project.color}>
      {project.title}
    </Heading>
    <Paragraph marginBottom={20}>
      <Strong>{totalHours}</Strong> hours
    </Paragraph>
    
    <BarChart  width={300} height={80} data={daysChart}>
      <Bar dataKey='hours' 
           onClick={() => alert("Hi!")}
      >
      {daysChart.map((entry, index) => (
        <Cell cursor="pointer" 
              fill={project.color} 
              key={`cell-${index}`}
        />
      ))}
      </Bar>
    </BarChart>

    <SelectField
      marginTop={20}
      label="Color"
      onChange={e => 
        updateColor(project.id, e.target.value)
      }
      value={project.color}
    >
      {Object.keys(Colors).map(x => 
        <option key={x} 
                value={Colors[x]}
        >

          {x}
        </option>
       )}
    
    </SelectField>

  </Pane>
)


export default Project