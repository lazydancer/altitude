import selectedEvent from './selectedEvent'

describe('selectedEvent reducer', () => {
  it('should handle inital state', () => {
    expect(
      selectedEvent(undefined, {})
      ).toEqual(null)
  })

  it('should handle SELECT_EVENT', () => {
    expect(
      selectedEvent(undefined, {
        type: 'SELECT_EVENT',
        id: "usally generated string by uuid"
      })
    ).toEqual({ id: "usally generated string by uuid"}
    )
  })
})