import { v4 } from 'node-uuid'

export const addEvent = (title, start, end) => ({
  type: 'ADD_EVENT',
  id: v4(),
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
