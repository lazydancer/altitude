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
        start: "2015-04-12T14:30:00.000Z",
        end: "2015-04-12T16:30:00.000Z",
        project: "projectID"
      })
    ).toEqual({ 
      "usally generated string by uuid" : 
        { 
          project: "projectID", 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z"
        }

    })
  })


  it('should handle ADD_EVENT', () => {
    expect(
      events({ 
      "usally generated string by uuid" : 
        { 
          project: "projectID",
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z"
        }
      }, 
      {
        type: 'ADD_EVENT',
        id: "2usally generated string by uuid",
        project: "projectID",
        start: "2015-04-12T16:30:00.000Z",
        end: "2015-04-12T18:30:00.000Z",
      })
    ).toEqual({ 
      "usally generated string by uuid" : 
        { 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
          project: "projectID",
        },
      "2usally generated string by uuid":
      {
        start: "2015-04-12T16:30:00.000Z",
        end: "2015-04-12T18:30:00.000Z",
        project: "projectID",
      }
    })
  })

   it('should handle UPDATE_EVENT', () => {
    expect(
      events({ 
        "usally generated string by uuid": { 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
          project: "projectID",
        }}, {
          type:'UPDATE_EVENT',
          id: "usally generated string by uuid",
          start: "2015-04-12T14:30:00.000Z",
          end: "2015-04-12T16:30:00.000Z",
          project: "projectID",
        })
    ).toEqual({ 
        "usally generated string by uuid": {
           start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
          project: "projectID",
        }})
  })


  it('should handle DELETE_EVENT', () => {
    expect(
      events({
          "usally generated string by uuid": { 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
          project: "projectID",}
        }, {
          type:'DELETE_EVENT',
          id: "usally generated string by uuid",
        })
    ).toEqual({})
  })

  it('should handle DELETE_EVENT', () => {
    expect(
      events({
          "usally generated string by uuid": { 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
        project: "projectID",},
          "2usally generated string by uuid": { 
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
        project: "projectID",}
        }, {
          type:'DELETE_EVENT',
          id: "usally generated string by uuid",
        })
    ).toEqual({
        "2usally generated string by uuid": {  
          start: "2015-04-12T14:30:00.000Z", 
          end: "2015-04-12T16:30:00.000Z",
        project: "projectID",}
        })
  })
})