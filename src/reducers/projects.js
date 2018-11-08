const projects = (state = {}, action ) => {
  switch(action.type){
    case 'ADD_PROJECT':
      return {
        ...state,
        [action.id]: {
          title: action.title,
          color: '#425A70'
        }
      }
    case 'UPDATE_COLOR':
      return {...state,
        [action.id]: {...state[action.id],  
          color: action.color
        }
      }
    case 'UPDATE_NAME':
      return {...state,
        [action.id]: {...state[action.id],  
          title: action.title
        }
      }
    case 'DELETE_PROJECT':
      return Object.keys(state).reduce((acc, cur) => 
        cur !== action.id ? {...acc, [cur]:state[cur]} : acc
      , {})
    default:
      return state
  }
}

export default projects