const projects = (state = [], action ) => {
  switch(action.type){
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          hours: 0
        }
      ]
    default:
      return state
  }
}

export default projects