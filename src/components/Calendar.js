import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

let localizer = BigCalendar.momentLocalizer(moment)


const Calendar = ({events, newEvent, moveEvent, selectEvent}) => {

  return (
      <DragAndDropCalendar
        selectable
        resizable
        localizer={localizer}
        events={events}
        onEventDrop={moveEvent}
        onEventResize={moveEvent}
        onSelectSlot={newEvent}
        onSelectEvent={selectEvent}
        defaultDate={new Date(2015, 3, 12)}
        defaultView={BigCalendar.Views.DAY}
      />
  )

}

export default Calendar