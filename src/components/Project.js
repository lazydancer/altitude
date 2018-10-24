import React from 'react'
import { Heading, Paragraph, Pane, Strong } from 'evergreen-ui'
import { BarChart, Bar, Cell } from 'recharts'



const isSameDay = (dateOne, dateTwo) => {
  return ( 
    dateOne.getDate() === dateTwo.getDate()
    && dateOne.getMonth() === dateTwo.getMonth()
    && dateOne.getFullYear() === dateTwo.getFullYear()
  )
}

const Project = ({projectName, events}) => {

  console.log('Hello', events)

  let eventsWDurations = events.map(event => ({
    ...event,
    duration: Math.round((event.end - event.start)/3600000)
  }))
  
  let daysChart = []

  for(let i=0; i<30; i++){
    let dayInSeconds = 86400000
    let date = new Date(Date.now() - dayInSeconds * i)
    let eventsOnDay = eventsWDurations.filter((event) => isSameDay(date, event.start))
    let hours = eventsOnDay.reduce((acc, x) => 
      acc + x.duration
    , 0.1)

    daysChart.push({
      date: date,
      hours: hours
    })
  }
  
  let data = daysChart.reverse()
  
  console.log('data', data)

  /*
  const data = eventsWDurations.reduce((acc, x) => {
    return acc.concat({uv: x.duration})
  }, [])
*/

  let hours = eventsWDurations.reduce((acc, x) => acc + x.duration, 0)
  return (
    <Pane  
      height={120}
      width={240}
      padding={20}>  
      <Heading size={900}>{projectName}</Heading>
      <Paragraph><Strong>{hours}</Strong> hours</Paragraph>
      <BarChart width={400} height={80} data={data}>
        <Bar dataKey='hours' 
             onClick={() => alert("Hi!")}
        >
        {data.map((entry, index) => (
          <Cell cursor="pointer" 
                fill={index === 0 ? '#265985' : '#3174ad' } 
                key={`cell-${index}`}
          />
        ))}
        </Bar>
      </BarChart>
    </Pane>
)}

export default Project