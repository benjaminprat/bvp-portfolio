const projects = [
  {
    title: 'National Parkfinder',
    type: 'Group',
    timeframe: '6 Days',
    description: 'A tool that allows users to explore all 63 national parks. Users can search parks by full or partial name or select a state from a dropdown menu',
    technologies: ['React','SCSS', 'Javascript'],
    deployed: 'http://national-parkfinder.herokuapp.com',
    repository: '',
    image: {
      src: '/images/gems.png',
      height: 100,
      width: 180
    }
  },
  {
    title: 'Viewing Party',
    type: 'Solo',
    timeframe: '4 Days',
    description: 'An application that provides one location to find cocktail recipes and trivia questions to play with friends. Users can specify cocktail bases and trivia categories as well as save recipes for later use.',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    deployed: 'https://triviology.herokuapp.com/',
    repository: 'https://github.com/alia-peterson/trivia-night',
    image: {
      src: '/images/candles.png',
      height: 160,
      width: 125
    }
  },
  {
    title: 'Operation Atmos',
    type: 'Solo',
    timeframe: '3 Days',
    description: 'An application that reports weather and air quality for a user\'s current location and for any specified locations supported by the AirVisual API. All locations are stored locally to allow for future reference and ease of use.',
    technologies: ['Vue', 'HTML', 'CSS', 'Javascript'],
    deployed: 'https://activ-air-alia-peterson.vercel.app/',
    repository: 'https://github.com/benjaminprat/operation-atmos-fe',
    image: {
      src: '/images/cards.png',
      height: 100,
      width: 180
    }
  }
]

export default projects
