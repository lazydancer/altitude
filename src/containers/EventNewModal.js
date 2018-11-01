import React from 'react';
import { connect } from 'react-redux'
import {  Table, Dialog } from 'evergreen-ui'
import { addEvent } from '../actions'


const EventNewModal = ({ id, start, end, projectList, hideModal, addEvent }) => {

  return (
    <Dialog 
      isShown={true}
      onCloseComplete={ () => hideModal()}
    >
        <Table>
          <Table.Body height={240}>
            {projectList.map(project => (
              <Table.Row key={project.id} isSelectable 
                         onSelect={() => {
                          addEvent(id, project.title, start, end)
                          hideModal()}}
              >
                <Table.TextCell>{project.title}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Dialog>

  )
}

export default connect(
  (state, ownProps) => ({
    id: ownProps.id,
    start: ownProps.start,
    end: ownProps.end,
    projectList: state.projects
  }),
  (dispatch) => ({
    hideModal: () => dispatch({type: 'HIDE_MODAL'}),
    addEvent: (id, title, start, end) => dispatch(addEvent(id, title, start, end))
  })
)(EventNewModal)