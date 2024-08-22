const moment  = require('moment');
const { Schema, model } = require('mongoose');
const User = require('./User');

//const Reaction = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      username: {
          type: Schema.Types.String,
          required: true,
          ref: 'User',
      },
    //   reactions: [Reaction],
      createdAt: {
        type: Date,
        default: Date.now(),
        get: (val) => moment(val).format('MM-DD-YYYY HH:mm')
      },
    },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
        getters: true,
      },
      toObject: {
        getters: true
      },
      id: false,
    }
  );
  
  // Create a virtual property `reactionCount` that gets the thought's reaction count
//   thoughtSchema
//     .virtual('reactionCount')
//     // Getter
//     .get(function () {
//         return this.reactions.length;
//     });
  
  // Initialize our Thought model
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;
  