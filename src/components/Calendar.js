import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Pane, Heading, IconButton, Button } from 'evergreen-ui'

import CustomToolbar from '../containers/CustomToolbar'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)
let localizer = BigCalendar.momentLocalizer(moment)
let formats = {timeGutterFormat: 'HH'}

const Calendar = ({copyToToday, events, newEventModal, moveEvent, selectEvent, selectEventModal}) => (
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
      components={{toolbar : CustomToolbar}}
      eventPropGetter={eventStyleGetter}
    />
  </Pane>
  
  </div>
)



const eventStyleGetter = (event, start, end, isSelected) => {
  return { style: { backgroundColor: event.color }}
}

export default Calendar