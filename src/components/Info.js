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
  console.log(projectList)

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

  /*

  

  let input

  return (
    <div className="info">
        <p>Info !</p>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            updateEvent(selectedEvent.id, input.value, selectedEvent.start, selectedEvent.end)
            input.value = ''
          }}>
          <input ref={node => input = node} />
          <button type="submit">
            Update Title
          </button>
        </form>
        <p>{selectedEvent.id}</p>
        <p>{selectedEvent.title}</p>
        <Button>I am using Evergreen!</Button>
    </div>
  )
  
  */


}

Info.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string
}

export default Info