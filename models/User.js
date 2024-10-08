const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,  // Regular expression for email validation
          'Please fill a valid email address'  // Custom error message if the validation fails
        ]
      },
      age: Number,
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
    },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
        getters: true
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
  