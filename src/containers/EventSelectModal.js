import React from 'react';
import { connect } from 'react-redux'
import { updateEvent, deleteEvent } from '../actions'
import { Heading, Button, Select, Dialog } from 'evergreen-ui'


const EventSelectModal = ({ id, selectedEvent, projectList, updateEvent, hideModal, deleteEvent}) => {

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
        updateEvent(id, input, selectedEvent.start, selectedEvent.end)
        hideModal()
      }}
    >
    <Select
      onChange={e => { input = e.target.value}}
    >
      <option value=""></option>
      {projectList.map(p => 
        <option key={p.id} value={p.id}>{p.title}</option>
      )}
    </Select>

    <p>{id}</p>

    <Heading>Actions</Heading>

    <Button intent="danger" appearance="primary" onClick={() => {
      deleteEvent(id)
      hideModal()
    }}>Delete</Button>

    </Dialog>
  )
}

export default connect(
  (state, ownProps) => {
    let projectsArray = []
    for( let key in state.projects ){
      projectsArray.push({...state.projects[key], id: key})
    }

    return ({
    id: ownProps.id,
    selectedEvent: state.events[ownProps.id],
    projectList: projectsArray
    })
  },
  (dispatch) => ({
    hideModal: () => dispatch({type: 'HIDE_MODAL'}),
    updateEvent: (id, project, start, end) => dispatch(updateEvent(id, project, start, end)),
    deleteEvent: id => dispatch(deleteEvent(id))
  })
)(EventSelectModal)