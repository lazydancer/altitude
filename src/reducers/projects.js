const projects = (state = {}, action ) => {
  switch(action.type){
    case 'ADD_PROJECT':
      return {
        ...state,
        [action.id]: {
          title: action.title,
        }
      }
    case 'UPDATE_COLOR':
      return {...state,
        [action.id]: {...state[action.id],  
          color: action.color
        }
      }
    default:
      return state
  }
}

export default projects