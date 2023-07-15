/**
 * TO GOD BE ALL THE GLORY
 * 14-JUL-2023 || 1614
 * This file will contain all the routes for Random String operations
 */

const express = require('express')
const router = express.Router()
const { getRandomStrings, setRandomString, updateRandomString, deleteRandomString } = require('../controllers/randomStringController')

// Chain the GET and SET methods to one route since both of their endpoints are similar i.e. (/)
router.route('/').get(getRandomStrings).post(setRandomString)

// Chain the UPDATE and DELETE methods to one route since both of their endpoints are similar i.e. (/:id)
router.route('/:id').put(updateRandomString).delete(deleteRandomString)

module.exports = router
