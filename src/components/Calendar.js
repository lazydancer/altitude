import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Pane, Heading, IconButton, Pill } from 'evergreen-ui'


const DragAndDropCalendar = withDragAndDrop(BigCalendar)

let localizer = BigCalendar.momentLocalizer(moment)

let formats = {timeGutterFormat: 'HH'}

const Calendar = ({events, newEventModal, moveEvent, selectEvent, selectEventModal}) => (
  <div>
  <Pane padding={16} flex="1">
    <DragAndDropCalendar
      selectable
      localizer={localizer}
      formats={formats}
      events={events}
      onEventDrop={moveEvent}
      resizable
      step={60}
      timeslots={1}
      onEventResize={moveEvent}
      onSelectSlot={newEventModal}
      views={['day']}
      onSelectEvent={selectEventModal}
      defaultDate={new Date()}
      defaultView={BigCalendar.Views.DAY}
      components={{toolbar : customToolbar}}
      eventPropGetter={eventStyleGetter}
    />
  </Pane>
  </div>
)

const customToolbar = ({label, onNavigate}) => (
  <div className='rbc-toolbar'>
    <Heading width={220}>{label}</Heading>

   
    <IconButton appearance="minimal" icon="chevron-left" onClick={() => onNavigate('PREV')}/>
    <IconButton appearance="minimal" icon="chevron-right" onClick={() => onNavigate('NEXT')}/>
  </div>
)

const eventStyleGetter = (event, start, end, isSelected) => {
  console.log(event)
  return { style: { backgroundColor: event.color }}
}

export default Calendar