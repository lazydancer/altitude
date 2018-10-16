const SelectedEvent = (state = null, action ) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      return action.id
    default:
      return state
  }
}