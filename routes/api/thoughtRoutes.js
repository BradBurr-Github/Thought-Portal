const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// /api/applications
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/tags
//router.route('/:thoughtId/reactions').post(addRection);

// /api/thoughts/:thoughtId/reactions/:reactionId
//router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;