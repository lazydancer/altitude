const eventDialog = (state = false, action ) => {
  switch(action.type){
    case 'ADD_EVENT':
      return ({
        showing: true,
        id: action.id,
        title: action.title, 
        start: action.start,
        end:  action.end
      })
    case 'UPDATE_EVENT':
      return ({...state, showing: false})
    default:
      return state
  }
}

export default eventDialog