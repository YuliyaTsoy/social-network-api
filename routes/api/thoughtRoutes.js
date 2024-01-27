const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// GET and POST routes to get all thoughts and create a new thought
router.route("/")
    // GET: /api/thoughts
    .get(getAllThoughts)
    // POST: /api/thoughts
    .post(createThought);


// GET, PUT, DELETE routes by thoughts id: /api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  // creates reaction
router.route("/:thoughtId/reactions/")
.post(addReaction)
//deletes reaction
router.route("/:thoughtId/reactions/:reactionId")
.delete(deleteReaction);

module.exports = router;