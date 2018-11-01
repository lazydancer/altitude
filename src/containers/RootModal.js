import React from 'react'
import { connect } from 'react-redux'

import NewEventSelectModal from './NewEventSelectModal'

const MODAL_COMPONENTS = {
  'NEW_EVENT_SELECT': NewEventSelectModal,
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