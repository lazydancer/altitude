const events = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          start: action.start,
          end: action.end
        }
      ]
    case 'MOVE_EVENT':
      return state.map(existingEvent => 
        (existingEvent.id === action.id)
          ? { ...existingEvent, start: action.start, end: action.end}
          : existingEvent
      )
    default:
      return state
  }
}

export default events