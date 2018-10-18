const projectDialog = (state = false, action ) => {
  switch(action.type){
    case 'TOGGLE_PROJECT_DIALOG':
      return !state
    default:
      return state
  }
}

export default projectDialog