const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit
} = require('../controllers/habitController');

router.use(protect);

router.route('/')
  .get(getHabits)
  .post(createHabit);

router.route('/:id')
  .put(updateHabit)
  .delete(deleteHabit);

module.exports = router;