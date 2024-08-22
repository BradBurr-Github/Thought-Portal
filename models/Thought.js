const { Schema, model } = require('mongoose');
const User = require('./User');
//const Reaction = require('./Reaction');

// Schema to create User model
const thoughtSchema = new Schema(
    {
      thoughtText: String,
      username: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    //   reactions: [Reaction],
      createdAt: {
        type: Date,
        default: Date.now(),
      },
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
  