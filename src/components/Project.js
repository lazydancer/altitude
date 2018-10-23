import React from 'react'
import { Heading, Paragraph, Pane, Strong } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'

const Project = ({projectName, events}) => {

console.log("input", events)

let hours = events.reduce(
  (acc, event) => {
    let eventHours = (event.end - event.start)/3600000
    return Math.round(eventHours) + acc
  }, 0
)

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 1090, pv: 4300, amt: 2200},
      {name: 'Page G', uv: 2490, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2300},
      {name: 'Page G', uv: 3590, pv: 4300, amt: 2100},
      {name: 'Page G', uv: 3990, pv: 4300, amt: 2000},
];

return (
  <Pane  
    height={120}
    width={240}
    padding={20}>  
    <Heading size={900}>{projectName}</Heading>
    <Paragraph><Strong>{hours}</Strong> hours</Paragraph>
    <BarChart width={500} height={200} data={data}>
      <Bar dataKey='uv' onClick={() => alert("Hi!")}>
        {
          data.map((entry, index) => (
            <Cell cursor="pointer" fill={index === 0 ? '#82ca9d' : '#8884d8' } key={`cell-${index}`}/>
          ))
        }
       </Bar>
    </BarChart>
  </Pane>
)}

export default Project