const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction =  require("../models/Reaction")

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://localhost/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create users with thoughts and reactions
async function seedData() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Generate users
    const users = [
      { username: 'john_doe', email: 'john@example.com' },
      { username: 'jane_smith', email: 'jane@example.com' },
      { username: 'alex_wilson', email: 'alex@example.com' },
    ];

    const createdUsers = await User.create(users);
    for (let i = 0; i < createdUsers.length; i++) {
      const user = createdUsers[i];

      // Generate thoughts
      const thoughts = [
        { thoughtText: 'Hello, world!', username: user.username },
        { thoughtText: 'I love coding!', username: user.username },
        { thoughtText: 'Today is a beautiful day.', username: user.username },
      ];

      const createdThoughts = await Thought.create(thoughts);
// ...

for (let j = 0; j < createdThoughts.length; j++) {
  const thought = createdThoughts[j];

  // Generate reactions as subdocuments
  const reactions = [
    {
      reactionBody: 'That sounds great!',
      username: 'reactUser1',
    },
    {
      reactionBody: 'I completely agree!',
      username: 'reactUser2',
    },
  ];

  thought.reactions.push(...reactions);

  await thought.save();
}

// ...


      User.thoughts.push(...createdThoughts);

      // Save the updated user
      await user.save();
    }

    console.log('Seeding complete!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedData();
