let initalState = [
  {
    id: 0,
    title: 'Bug Fix', //Having this event load vs an empty array  
    allDay: true,     //avoids the two click needed to do anything
    start: new Date(),
    end: new Date(),
  }
]

const events = (state = initalState, action ) => {
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
    case 'UPDATE_EVENT':
      return state.map(existingEvent => 
        (existingEvent.id === action.id)
          ? {id: action.id, title: action.title, start: action.start, end: action.end}
          : existingEvent
      )
    default:
      return state
  }
}

export default events