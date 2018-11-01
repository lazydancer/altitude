let mockEvents = { 
  projects: [
  {
    id: 'asdf',
    title: 'Sleep',
  },
  {
    id: 'asdd',
    title: 'Eat',
  },
   {
    id: 'afsdf',
    title: 'Work',
  },

  ],

  events: 
  {
    'asdfasdfasdf' : {
      title: 'Event',
      start: new Date('2018-11-01T14:00:00.000Z'),
      end: new Date('2018-11-01T16:00:00.000Z'),
    },
    'bsdfasdfadf': {
      title: 'Event 2',
      start: new Date('2018-11-01T17:00:00.000Z'),
      end: new Date('2018-11-01T20:00:00.000Z'),
    },
  }
}

export default mockEvents

/*
  [
  {
    id: 'asdfasdfasdf',
    title: 'Event',
    start: new Date('2018-11-01T14:00:00.000Z'),
    end: new Date('2018-11-01T16:00:00.000Z'),
  },
   {
    id: 'asdfasdfadf',
    title: 'Event 2',
    start: new Date('2018-11-01T17:00:00.000Z'),
    end: new Date('2018-11-01T20:00:00.000Z'),
  },


]
*/