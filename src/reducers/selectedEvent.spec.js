import selectedEvent from './selectedEvent'

describe('selectedEvent reducer', () => {
  it('should handle inital state', () => {
    expect(
      selectedEvent(undefined, {})
      ).toEqual(null)
  })

  it('should handle SELECT_EVENT', () => {
    expect(
      selectedEvent(null, {
        type: 'SELECT_EVENT',
        event: {
          id: "usally generated string by uuid",
          title: "A title",
          start: "2015-04-12T14:30:00.000Z",
          end: "2015-04-12T16:30:00.000Z"
        }
      })
    ).toEqual({ 
      id: "usally generated string by uuid",
      title: "A title",
      start: "2015-04-12T14:30:00.000Z",
      end: "2015-04-12T16:30:00.000Z"
    })
  })
})