import React from 'react'
import { Heading, Paragraph, Pane, Strong, SelectField, Button, TextInputField } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'
import { Link } from 'react-router-dom'
import { Colors } from '../constants'


const Project = ({project, totalHours, updateProjectName, deleteProject, daysChart, projectList, updateColor}) => (
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

    <TextInputField
      label="Change Project Name"
      placeholder={project.title}
      marginTop={20}
      onChange={e => updateProjectName(project.id, e.target.value)}
    />

    <SelectField
      
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

    <Button 
      appearance={"minimal"}
      is={Link}
      to={"/"}
      marginRight={12} 
      iconBefore="trash" 
      intent="danger"
      onClick = {()=>deleteProject(project.id)}
    >
      Delete Project
    </Button>


  </Pane>
)


export default Project