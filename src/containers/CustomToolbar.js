import React from 'react'
import { connect } from 'react-redux'
import { Pane, Heading, IconButton, Button } from 'evergreen-ui'
import { copyDay } from '../actions'

const CustomToolbar = ({label, onNavigate, date, copyToToday}) => (
  <div className='rbc-toolbar'>
    <Heading width={220}>{label}</Heading>
    
    <IconButton appearance="minimal" icon="caret-left" onClick={() => onNavigate('PREV')}/>
    <IconButton appearance="minimal" icon="caret-right" onClick={() => onNavigate('NEXT')}/>
  
    <IconButton appearance="minimal" icon="duplicate" tooltip="copy to today"
    onClick={() => copyToToday(date)}/>

  </div>
)

export default connect(
  (state, ownProps) => ({
    label: ownProps.label,
    onNavigate: ownProps.onNavigate,
    date: ownProps.date,
  }),
  dispatch => ({
    copyToToday: (date) => dispatch(copyDay(date, new Date()))
  })
)(CustomToolbar)