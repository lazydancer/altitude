import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './Calendar.css'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

let localizer = BigCalendar.momentLocalizer(moment)

const Calendar = ({events, newEvent, moveEvent, selectEvent}) => (
  <DragAndDropCalendar
    selectable
    localizer={localizer}
    events={events}
    onEventDrop={moveEvent}
    resizable
    onEventResize={moveEvent}
    onSelectSlot={newEvent}
    onSelectEvent={selectEvent}
    defaultDate={new Date(2015, 3, 12)}
    defaultView={BigCalendar.Views.DAY}
  />
)

export default Calendar