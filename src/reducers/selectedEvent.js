const selectedEvent = (state = null, action ) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      return {id: action.id}
    default:
      return state
  }
}


export default selectedEvent