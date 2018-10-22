import projects from './projects'

describe('projects reducer', () => {
  it('should handle inital state', () => {
    expect(
      projects(undefined, {})
      ).toEqual([])
  })

  it('should handle ADD_PROJECT', () => {
    expect(
      projects([], {
        type: 'ADD_PROJECT',
        id: 'Hello',
        title: 'Reading' 
    })
    ).toEqual([{ 
      id: 'Hello',
      title: 'Reading',
    }])
  })
})