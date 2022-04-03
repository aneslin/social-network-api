const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getThoughtById,
  updateThought,
  deleteThought,
createReaction,
deleteReaction
} = require("../../controllers/thought-controller");


router
.route('/')
.get(getAllThoughts)
.post(addThought)


router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

router
.route('/:thoughtId/reactions')
.post(createReaction)
.delete(deleteReaction)

module.exports = router