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

export const selectEvent = (event) => ({
  type: 'SELECT_EVENT',
  event
})

