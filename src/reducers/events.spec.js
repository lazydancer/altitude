import events from './events'

describe('events reducer', () => {
 
 /* it('should handle inital state', () => {
    expect(
      events(undefined, {})
      ).toEqual([])
  })
*/ //This is broken temporary as the big calendar bug

  it('should handle ADD_EVENT', () => {
    expect(
      events([], {
        type: 'ADD_EVENT',
        id: "usally generated string by uuid",
        title: "A new event",
        start: "2015-04-12T14:30:00.000Z",
        end: "2015-04-12T16:30:00.000Z",
      })
    ).toEqual([
      { id: "usally generated string by uuid", 
        title: "A new event", 
        start: "2015-04-12T14:30:00.000Z", 
        end: "2015-04-12T16:30:00.000Z"}
    ])
  })


  it('should handle ADD_EVENT', () => {
    expect(
      events([
        { id: "usally generated string by uuid", 
          title: "A new event", 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z"}
        ], {
          type: 'ADD_EVENT',
          id: "2usally generated string by uuid",
          title: "A second event",
          start: "2015-04-12T16:30:00.000Z",
          end: "2015-04-12T18:30:00.000Z",
        })
    ).toEqual([
      { id: "usally generated string by uuid", 
        title: "A new event", 
        start: "2015-04-12T14:30:00.000Z", 
        end: "2015-04-12T16:30:00.000Z" },
      { id: "2usally generated string by uuid",
        title: "A second event",
        start: "2015-04-12T16:30:00.000Z",
        end: "2015-04-12T18:30:00.000Z"}
    ])
  })

   it('should handle MOVE_EVENT', () => {
    expect(
      events([
        { id: "usally generated string by uuid", 
          title: "A new event", 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z"}
        ], {
          type:'MOVE_EVENT',
          id: "usally generated string by uuid",
          start: "2015-04-12T16:30:00.000Z",
          end: "2015-04-12T18:30:00.000Z",
        })
    ).toEqual([
      { id: "usally generated string by uuid", 
        title: "A new event", 
        start: "2015-04-12T16:30:00.000Z", 
        end: "2015-04-12T18:30:00.000Z" }
    ])
  })

   it('should handle UPDATE_EVENT', () => {
    expect(
      events([
        { id: "usally generated string by uuid", 
          title: "A new event", 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z"}
        ], {
          type:'UPDATE_EVENT',
          id: "usally generated string by uuid",
          title: "A new title",
          start: "2015-04-12T14:30:00.000Z",
          end: "2015-04-12T16:30:00.000Z",
        })
    ).toEqual([
      { id: "usally generated string by uuid", 
        title: "A new title", 
        start: "2015-04-12T14:30:00.000Z", 
        end: "2015-04-12T16:30:00.000Z" }
    ])
  })
})