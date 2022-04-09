const usernamesFirst = [
  'lamek',
  'jason',
  'john',
  'lexi',
  'mark',
  'angela',
  'lordfarquad',
  'princecharles',
  'justinbieber',
  'destiny',
  'jase',
  'hult',
  'sam',
  'carlsson',
  'frits',
  'thor',
  'ironman',
  'andrew',
  'garfield',
  'scarlett',
  'johnsson',
  'robert',
  'downey',
  'junior',
  'zachariah',
  'youssef',
  'mohamad',
  'marouf',
  'aaron',
  'zinedine',
  'zidane',
  'lionel',
  'messi',
  'cristiano',
  'ronaldo'
]

const usernamesSecond = [
  '-zishan',
  '-ziya',
  '-ziyaan',
  '-zohaib',
  '-zohair',
  '-zoubaeir',
  '-zubair',
  '-zubayr',
  '-zuriel',
  '-xander',
  '-jared',
  '-courtney',
  '-gillian',
  '-clark',
  '-jared',
  '-grace',
  '-kelsey',
  '-alex',
  '-mark',
  '-tamar',
  '-farish',
  '-sarah',
  '-nathaniel',
  '-parker',
]

const randomThought = [
  'I think this is great',
  'Love it!',
  'Amazing work!',
  'Would you like to be my friend?',
  'I am a robot',
  'This is very annoying',
  'I can not be bothered typing all these thoughts',
  'Bad thoughts',
  'Good thoughts',
  'Amazing',
  'Greeeeaaat',
  'Goooood',
  'Coooool',
  'Woooooow',
  'Unbelievable',
  'Food is on my mind',
  'I feel like watching a movie',

]


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(usernamesFirst)}${getRandomArrItem(usernamesSecond)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  const getRandomThought = () =>
  `${getRandomArrItem(randomThought)}`;
  
module.exports = { getRandomUsername, getRandomThought }

