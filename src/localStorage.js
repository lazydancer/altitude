export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    let state =  JSON.parse(serializedState);

    state.events = state.events.map(x => {
      return (
      {id: x.id,
       title: x.title,
       start: new Date(x.start),
       end: new Date(x.end)
      }) 
    })
    return state
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialedState = JSON.stringify(state)
    localStorage.setItem('state', serialedState)
  } catch (err) {
    // Ignore for now
  }
}