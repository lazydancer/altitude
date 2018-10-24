import React from 'react';
import PropTypes from 'prop-types'
import { Heading, Button, Select, Dialog } from 'evergreen-ui'

const Info = ({ selectedEvent, projectList, updateEvent, closeEvent, deleteEvent}) => {

  if(!selectedEvent){
    return (
      <div className="info">
      </div>
    )
  }

  let input = selectedEvent.title

  return (
    <Dialog
      isShown={selectedEvent !== null}
      title="Edit"
      onCloseComplete={() => {
        updateEvent(selectedEvent.id, input, selectedEvent.start, selectedEvent.end)
        closeEvent()
      }}
    >
    <Select
      onChange={e => { input = e.target.value}}
    >
      <option value=""></option>
      {projectList.map(p => 
        <option key={p} value={p}>{p}</option>
      )}
    </Select>

    <p>{selectedEvent.id}</p>

    <Heading>Actions</Heading>

    <Button intent="danger" appearance="primary" onClick={() => {
      deleteEvent(selectedEvent.id)
      closeEvent()
    }}>Delete</Button>

    </Dialog>
  )
}

Info.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
}

export default Info