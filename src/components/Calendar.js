import React from 'react'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import VisibleInfo from '../containers/VisibleInfo'
import { Pane, Heading, IconButton } from 'evergreen-ui'


const DragAndDropCalendar = withDragAndDrop(BigCalendar)

let localizer = BigCalendar.momentLocalizer(moment)

let formats = {timeGutterFormat: 'HH'}

const Calendar = ({events, newEvent, moveEvent, selectEvent}) => (
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
      onSelectSlot={newEvent}
      views={['day']}
      onSelectEvent={selectEvent}
      defaultDate={new Date()}
      defaultView={BigCalendar.Views.DAY}
      components={{toolbar : customToolbar}}
    />
  </Pane>
  <VisibleInfo />
  </div>
)

const customToolbar = ({label, onNavigate}) => (
  <div width={300} className='rbc-toolbar'>
    <Heading >{label}</Heading>
    <IconButton appearance="minimal" icon="chevron-left" onClick={() => onNavigate('PREV')}/>
    <IconButton appearance="minimal" icon="chevron-right" onClick={() => onNavigate('NEXT')}/>
  </div>
)

export default Calendar

/*
  <div className='rbc-toolbar'>
        <span className="rbc-btn-group">
          <button type="button" onClick={() => onNavigate('TODAY')}>today</button>
          <button type="button" onClick={() => onNavigate('PREV')}>back</button>
          <button type="button" onClick={() => onNavigate('NEXT')}>onwards</button>
        </span>
        <span className="rbc-toolbar-label">{label}</span>
        <Heading>{label}</Heading>
      </div>
      */