const connection = require('../config/connection');
const { ObjectId } = require('mongodb');
const { User, Thought } = require('../models');
const { getRandomUsernameAndEmail, getRandomThought, getRandomDateInPast30Days } = require('./data');

// Global variable for how many objects to populate the database with
let i = 0, j = 0, k = 0;
const globalVariableCount = 20;

connection.on('error', (err) => err);

// Connect to the database
connection.once('open', async () => {
  console.log('connected');

  try {
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
      console.log(`Thoughts" collection was dropped.`);
    }
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
      console.log(`Users" collection was dropped.`);
    }

    // Get <globalVariableCount> random users
    let users = [];
    let thoughts = [];
    let usernamesEmails = [];
    for (i = 0; i < globalVariableCount; i++) {
      usernamesEmails = getRandomUsernameAndEmail();
      if (users.some(item => item.username.includes(usernamesEmails.username))) {
        // User already exists, try again
        i--;
        continue;
      }
      // Add information to the users array
      users.push({
        username: usernamesEmails.username,
        email: usernamesEmails.email,
        age: Math.floor(Math.random() * (75 - 18 + 1)) + 18,
        thoughts: [],
        friends: [],
      });
    }

    // Add User to the database
    await User.insertMany(users);
    
    // Reset users array and re-add the Users into it (including _id)
    users = [];
    cursor = await User.find({});
    await cursor.forEach(doc => {
      users.push({
        _id: doc._id,
        username: doc.username,
        email: doc.email,
        age: doc.age,
        thoughts: doc.thoughts,
        friends: doc.friends,
      })
    })

    // Update/Add thoughts and friends to each of the users in the users array
    for (i = 0; i < users.length; i++) {
      // Get random friends
      let friends = [];
      let friendCount = Math.floor(Math.random() * 3) + 1;
      for (j = 0; j < friendCount; j++) {
        let randomFriendIndex = Math.floor(Math.random() * users.length);
        if (users[randomFriendIndex].username === users[i].username) {
          // found self as friend, try again...
          j--;
          randomFriendIndex = Math.floor(Math.random() * users.length);
          continue;
        };
        if (friends.includes(users[randomFriendIndex]._id)) {
          // friend already exists for this user
          j--;
          randomFriendIndex = Math.floor(Math.random() * users.length);
          continue;
        };
        // Add new friend to the current user's friends array
        users[i].friends.push( 
          users[randomFriendIndex]._id
        );
      }
      // Add thoughts to the database and then to the users array
      let thoughtCount = Math.floor(Math.random() * 3) + 1;
      for (k = 0; k < thoughtCount; k++) {
        let thoughtText = getRandomThought();
        let createAt = getRandomDateInPast30Days();
        let insertThought = [{
          thoughtText: thoughtText,
          username: users[i].username,
          createAt: createAt
        }]
        // Add new thought to the Thought Collection
        let newThoughtId = await Thought.insertMany(insertThought);
        // Add new thoughts to the current thought's array
        thoughts.push( {
          thoughtText: thoughtText,
          username: users[i].username,
          createAt: createAt
        })
        // Add new thought to the current user's thoughts array
        users[i].thoughts.push( 
          newThoughtId[0]._id
        )
      }
    }

    // Add user's thoughts and friends assignments to the user Collectoin
    for (i = 0; i < users.length; i++) {
      // Add user's thoughts assignments to the database
      let currUserId = new ObjectId(users[i]._id.toString());
      let thoughtOrFriend1 = null;
      let thoughtOrFriend2 = null;
      let thoughtOrFriend3 = null;
      let filter = { _id: currUserId };
      let updateDoc = '';
      switch (users[i].thoughts.length) {
        case 1:
          thoughtOrFriend1 = new ObjectId(users[i].thoughts[0]._id.toString());
          updateDoc = { $set: { "thoughts": [ thoughtOrFriend1 ] }};
          break;
        case 2:
          thoughtOrFriend1 = new ObjectId(users[i].thoughts[0]._id.toString());
          thoughtOrFriend2 = new ObjectId(users[i].thoughts[1]._id.toString());
          updateDoc = { $set: { "thoughts": [ thoughtOrFriend1, thoughtOrFriend2 ] }};
          break;
        case 3:
          thoughtOrFriend1 = new ObjectId(users[i].thoughts[0]._id.toString());
          thoughtOrFriend2 = new ObjectId(users[i].thoughts[1]._id.toString());
          thoughtOrFriend3 = new ObjectId(users[i].thoughts[2]._id.toString());
          updateDoc = { $set: { "thoughts": [ thoughtOrFriend1, thoughtOrFriend2, thoughtOrFriend3 ] }};
          break;
      }
      // Write thought assignments for the current user
      await User.updateOne(filter, updateDoc);

      // Add user's friend assignments to the database
      updateDoc = '';
      switch (users[i].friends.length) {
        case 1:
          thoughtOrFriend1 = new ObjectId(users[i].friends[0]._id.toString());
          updateDoc = { $set: { "friends": [ thoughtOrFriend1 ] }};
          break;
        case 2:
          thoughtOrFriend1 = new ObjectId(users[i].friends[0]._id.toString());
          thoughtOrFriend2 = new ObjectId(users[i].friends[1]._id.toString());
          updateDoc = { $set: { "friends": [ thoughtOrFriend1, thoughtOrFriend2 ] }};
          break;
        case 3:
          thoughtOrFriend1 = new ObjectId(users[i].friends[0]._id.toString());
          thoughtOrFriend2 = new ObjectId(users[i].friends[1]._id.toString());
          thoughtOrFriend3 = new ObjectId(users[i].friends[2]._id.toString());
          updateDoc = { $set: { "friends": [ thoughtOrFriend1, thoughtOrFriend2, thoughtOrFriend3 ] }};
          break;
      }
      // Write thought assignments for the current user
      await User.updateOne(filter, updateDoc);
    };

    // Output Results
    console.log('======')
    console.log('USERS:')
    console.log('======')
    console.table(users);
    console.log('=========')
    console.log('THOUGHTS:')
    console.log('=========')
    console.table(thoughts);
    console.info('Seeding complete! 🌱');

    // Terminate process
    process.exit(0);

  } catch (err) {
    console.error("Error:", err);
  }
});
