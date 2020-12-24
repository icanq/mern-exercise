const router = require('express').Router()
const exercise = require('./excercise')
const user = require('./user')

router.get('/', (req, res) => {
  res.send('from router')
})
router.use('/exercise', exercise)
router.use('/users', user)

module.exports = router