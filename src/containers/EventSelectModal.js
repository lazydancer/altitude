import React from 'react';
import { connect } from 'react-redux'
import { updateEvent, deleteEvent } from '../actions'
import { Heading, Button, Select, Dialog } from 'evergreen-ui'


const EventSelectModal = ({ selectedEvent, projectList, updateEvent, hideModal, deleteEvent}) => {

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
        hideModal()
      }}
    >
    <Select
      onChange={e => { input = e.target.value}}
    >
      <option value=""></option>
      {projectList.map(p => 
        <option key={p.id} value={p.title}>{p.title}</option>
      )}
    </Select>

    <p>{selectedEvent.id}</p>

    <Heading>Actions</Heading>

    <Button intent="danger" appearance="primary" onClick={() => {
      deleteEvent(selectedEvent.id)
      hideModal()
    }}>Delete</Button>

    </Dialog>
  )
}

export default connect(
  (state, ownProps) => ({
    id: ownProps.id,
    selectedEvent: state.events.find(x => x.id === ownProps.id),
    projectList: state.projects
  }),
  (dispatch) => ({
    hideModal: () => dispatch({type: 'HIDE_MODAL'}),
    updateEvent: (id, title, start, end) => dispatch(updateEvent(id, title, start, end)),
    deleteEvent: id => dispatch(deleteEvent(id))
  })
)(EventSelectModal)