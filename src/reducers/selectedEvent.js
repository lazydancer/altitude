const selectedEvent = (state = null, action ) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      return ({
          id: action.event.id,
          title: action.event.title,
          start: action.event.start,
          end: action.event.end
      })
    default:
      return state
  }
}


export default selectedEvent