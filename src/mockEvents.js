let mockEvents = { 
  projects: 
  {
    'asdf': {
      title: 'Sleep',
      color: '#425A70'
    },
    'bsdf': {
      title: 'Eat',
      color: '#47B881'
    },
    'csdf': {
      title: 'Work',
      color: '#EC4C47'
    }
  },

  events: 
  {
    'asdfasdfasdf' : {
      project: 'asdf',
      start: new Date('2018-11-02T14:00:00.000Z'),
      end: new Date('2018-11-02T16:00:00.000Z'),
    },
    'bsdfasdfadf': {
      project: 'bsdf',
      start: new Date('2018-11-02T17:00:00.000Z'),
      end: new Date('2018-11-02T20:00:00.000Z'),
    },
  }
}

export default mockEvents
