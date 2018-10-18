const projects = (state = [], action ) => {
  switch(action.type){
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ]
    default:
      return state
  }
}

export default projects