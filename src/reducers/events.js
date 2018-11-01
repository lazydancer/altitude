let initalState = {
  0 : {
    title: '', //Having this event load vs an empty array  
    allDay: true,     //avoids the two click needed to do anything
    start: new Date(),
    end: new Date(),
  },
}

const events = (state = initalState, action ) => {
  switch (action.type) {
    case 'ADD_EVENT':
    case 'UPDATE_EVENT':
      return ({ ...state,
        [action.id]: event(state[action.id], action)
      })
    case 'DELETE_EVENT':
      return Object.keys(state).reduce((acc, cur) => 
        cur !== action.id ? {...acc, [cur]:state[cur]} : acc
      , {})
    default:
      return state
  }
}

const event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
    case 'UPDATE_EVENT':
      return ({
        title: action.title, 
        start: action.start,
        end: action.end
      })
    default:
      return state
  }
}

export default events