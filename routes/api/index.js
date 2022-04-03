const router = require('express').Router()

const UserRoutes =  require('./user-routes')
router.use('/users', UserRoutes)

const ThoughtRoutes = require('./thought-routes')
router.use('/thoughts', ThoughtRoutes)


module.exports = router