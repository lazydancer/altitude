import React from 'react'
import { connect } from 'react-redux'

import EventNewModal from './EventNewModal'
import EventSelectModal from './EventSelectModal'
import ProjectNewModal from './ProjectNewModal'

const MODAL_COMPONENTS = {
  'NEW_EVENT_SELECT': EventNewModal,
  'SELECT_EVENT': EventSelectModal,
  'NEW_PROJECT': ProjectNewModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span />
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)