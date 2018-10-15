import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from 'moment'
import './react-big-calendar.css'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

let localizer = BigCalendar.momentLocalizer(moment)

class Dnd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: props.events,
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  
  newEvent(event) {
    this.props.newEvent('newEvent', event.start, event.end)
    /*
     let idList = this.state.events.map(a => a.id)
     let newId = Math.max(...idList) + 1
     let hour = {
       id: newId,
       title: 'New Event',
       allDay: event.slots.length === 1,
       start: event.start,
       end: event.end,
     }
     this.setState({
       events: this.state.events.concat([hour]),
     })
     */
  }
  


  selectEvent(event){
    console.log(event)
  }

  render() {
    return (
      <DragAndDropCalendar
        selectable
        resizable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        onEventResize={this.resizeEvent}
        onSelectSlot={this.newEvent}
        onSelectEvent={this.selectEvent}
        defaultDate={new Date(2015, 3, 12)}
        defaultView={BigCalendar.Views.DAY}
      />
    )
  }
}

export default Dnd