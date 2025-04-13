const Habit = require('../models/habitModel');

const createHabit = async (req, res) => {
  try {
    const habit = await Habit.create({
      ...req.body,
      user: req.user._id
    });
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user._id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }
    res.json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    if (!habit) {
      return res.status(404).json({ message: 'Habit not found' });
    }
    res.json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit
};