/**
 * TO GOD BE ALL THE GLORY
 * 12-JUL-2023 1245
 * This file will contain all the routes for Random Number generation
 */
const express = require('express')
const router = express.Router()
const { getRandomNumber } = require('../controllers/randomNumberController')

// Chain the GET and SET methods to one route since both of their endpoints are similar i.e. (/)
router.route('/').get(getRandomNumber).post(setRandomNumber)

// Chain the UPDATE and DELETE methods to one route since both of their endpoints are similar i.e. (/:id)
router.route('/:id').put(updateRandomNumber).delete(deleteRandomNumber)

module.exports = router