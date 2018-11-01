import React from 'react';
import { connect } from 'react-redux'
import { Dialog, TextInput } from 'evergreen-ui'
import { addProject } from '../actions'


const ProjectNewModal = ({ addProject, hideModal }) => {

  let input = ""

  return (
    <Dialog
      isShown={true}
      title="Add Project"
      onCloseComplete={() => {
        if (input !== "") addProject(input)
        hideModal()
      }}
    >
      <TextInput
        name="text-input-name"
        placeholder="Text input placeholder..."
        onChange={e => { input = e.target.value }}
      />  

    </Dialog> 

  )
}

export default connect(
  (state, ownProps) => ({
  }),
  (dispatch) => ({
    addProject: (project) => dispatch(addProject(project)),
    hideModal: () => dispatch({type: 'HIDE_MODAL'})
  })
)(ProjectNewModal)