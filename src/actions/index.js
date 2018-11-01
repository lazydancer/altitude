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

export const deleteEvent = id => ({
  type: 'DELETE_EVENT',
  id
})


export const addProject = (title) => ({
  type: 'ADD_PROJECT',
  id: v4(),
  title
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

export const newProjectModal = () => ({
  type: 'SHOW_MODAL',
  modalType: 'NEW_PROJECT',
  modalProps: {
  }
})