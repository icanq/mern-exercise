const exercise = require('express').Router();
const Exercise = require('../models/exercise.model');

// create
exercise.post('/add', (req, res) => {
  const payload = {
    username: req.body.username,
    description: req.body.description,
    duration: +req.body.duration,
    date: Date.parse(req.body.date),
  };

  const newExercise = new Exercise(payload);

  newExercise
    .save()
    .then((_) => res.json('Exercise added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// read
exercise.get('/', (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// update
exercise.put('/:id', (req, res) => {
  Exercise.findById(+req.params.id)
    .then((exercise) => {
      (exercise.username = req.body.username),
        (exercise.description = req.body.description),
        (exercise.duration = +req.body.duration),
        (exercise.date = Date.parse(req.body.date));

      exercise
        .save()
        .then((_) => res.json('Exercise updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// delete
exercise.delete('/:id', (req, res) => {
  Exercise.findByIdAndDelete(+req.params.id)
    .then((_) => res.json('Exercise deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = exercise;
