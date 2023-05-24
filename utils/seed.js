const connection = require('../config/connection');
const {Schema, Types , model} =  require("mongoose");
const { User, Thought } = require('../models');
const { faker } = require('@faker-js/faker');

const reactionSchema = require('../models/Reaction'); // Assuming the path to the reactionSchema file is correct

const Reaction = model('Reaction', reactionSchema);

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  function createUser() {
    return {
      username: faker.internet.userName(),
      email: faker.internet.email(),
    };
  }
  
  let users = faker.helpers.multiple(createUser, { count: 10 });
  await User.create(users);
  console.log("Users created successfully");

  function createThoughts() {
    return {
      thoughtText: faker.lorem.sentences(2),
      username: faker.internet.userName(),
    };
  }
  
  let thoughts = faker.helpers.multiple(createThoughts, { count: 10 });
  await Thought.create(thoughts);
  console.log("Thoughts created successfully");


  const reactionSeeds = [
    {
      reactionBody: "First reaction",
      username: "user1",
      createdAt: new Date(),
    },
    {
      reactionBody: "Second reaction",
      username: "user2",
      createdAt: new Date(),
    },
    {
      reactionBody: "Third reaction",
      username: "user3",
      createdAt: new Date(),
    },
    {
      reactionBody: "Fourth reaction",
      username: "user4",
      createdAt: new Date(),
    },
    {
      reactionBody: "Fifth reaction",
      username: "user5",
      createdAt: new Date(),
    },
  ];
  
  await Reaction.insertMany(reactionSeeds);
  console.log("reactions added")
  connection.close();
});
