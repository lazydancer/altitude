import { v4 } from 'node-uuid'

export const addEvent = (id, title, start, end) => ({
  type: 'ADD_EVENT',
  id,
  title,
  start,
  end
})

export const updateEvent = (id, title, start, end) => ({ //move and resize
  type: 'UPDATE_EVENT',
  id,
  title,
  start,
  end
})

export const moveEvent = (id, start, end) => ({ //move and resize
  type: 'MOVE_EVENT',
  id,
  start,
  end
})

export const deleteEvent = id => ({
  type: 'DELETE_EVENT',
  id
})

export const selectEvent = (event) => ({
  type: 'SELECT_EVENT',
  event
})

export const unSelectEvent = () => ({
  type: 'UNSELECT_EVENT'
})

export const addProject = (title) => ({
  type: 'ADD_PROJECT',
  id: v4(),
  title
})

export const toggleProjectDialog = () => ({
  type: 'TOGGLE_PROJECT_DIALOG'
})

export const newEventModal = (start, end) => ({
  type: 'SHOW_MODAL',
  modalType: 'NEW_EVENT_SELECT',
  modalProps: {
    id: v4(),
    start,
    end
  }
})

export const selectEventModal = (id) => ({
  type: 'SHOW_MODAL',
  modalType: 'SELECT_EVENT',
  modalProps: {
    id: id
  }
})