const user = require('express').Router()
const User = require('../models/user.model')

// create
user.post('/add', (req, res) => {
  const username = req.body.username
  const newUser = new User({ username })
  newUser.save()
    .then(_ => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

// read
user.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

// update
user.put('/:id', (req, res) => {
  User.findById(+req.params.id)
    .then((user) => {
      (user.username = req.body.username),
        
      user.save()
        .then((_) => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// delete
user.delete('/:id', (req, res) => {
  User.findByIdAndDelete(+req.params.id)
    .then((_) => res.json('User deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = user