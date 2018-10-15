import { v4 } from 'node-uuid'

export const addEvent = (title, start, end) => ({ //move and resize
  type: 'ADD_EVENT',
  id: v4(),
  title,
  start,
  end
})

export const moveEvent = (id, start, end) => ({ //move and resize
  type: 'UPDATE_EVENT',
  id,
  start,
  end
})

