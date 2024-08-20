const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const User = require('./User');

// Schema to create User model
const userSchema = new Schema(
    {
      username: String,
      last: String,
      age: Number,
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property `friendCount` that gets the user's friend count
  userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });
  
  // Initialize our User model
  const User = model('user', userSchema);
  
  module.exports = User;
  