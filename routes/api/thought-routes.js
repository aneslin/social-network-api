const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thought-controller");


router
.route('/')
.get(getAllThoughts)
.post(addThought)


router
.route('/:id')
.get(getThoughtById)

module.exports = router