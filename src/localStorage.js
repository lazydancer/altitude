export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    let state =  JSON.parse(serializedState);
    
    state.events = Object.keys(state.events).reduce((acc, cur) =>{
     return ({ ...acc , [cur]: {...state.events[cur],
                       start: new Date(state.events[cur].start),
                       end: new Date(state.events[cur].end)}
     }) 
    }, {})
    
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