const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Add const usernames = getRandomUsernames() within a for loop
  for (let i = 0; i < 10; i++) {
    const thoughts = getRandomThought()
    const username = getRandomUsername();
    const email = `${username}@hotmail.com`;

    users.push({
      username,
      email,
      thoughts,
  });
}

const thoughts = [];

for (let i = 0; i < 10; i++) {
  const thoughtText = getRandomThought()
  const username = getRandomUsername();

  thoughts.push({
    username,
    thoughtText,
});
}


  // Add students to the collection and await the results
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  await Thought.collection.insertOne({
    username: [...users],
  });



  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
