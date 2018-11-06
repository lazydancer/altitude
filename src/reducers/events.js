import { v4 } from 'node-uuid'
import { isSameDay } from '../constants'

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
        [action.id]: {
          project: action.project,
          start: action.start,
          end: action.end
        }
      })
    case 'COPY_DAY':
      return Object.keys(state).reduce((acc, cur) =>{
        let fromStart = new Date(state[cur].start)
        let fromEnd = new Date(state[cur].end)
        let fromCopy = new Date(action.from)
        let toCopy = new Date(action.to)

        if (isSameDay(fromStart,fromCopy)) { 
          return ({...acc, 
            [cur]:state[cur], 
            [v4()]: {...state[cur], 
              start: new Date(toCopy.getFullYear(), 
                              toCopy.getMonth(), 
                              toCopy.getDate(), 
                              fromStart.getHours()),
              end: new Date(toCopy.getFullYear(), 
                            toCopy.getMonth(), 
                            toCopy.getDate(), 
                            fromEnd.getHours())
            }
          })
        }  
        return {...acc, [cur]:state[cur]}
      }, {})
    case 'DELETE_EVENT':
      return Object.keys(state).reduce((acc, cur) => 
        cur !== action.id ? {...acc, [cur]:state[cur]} : acc
      , {})
    default:
      return state
  }
}

export default events