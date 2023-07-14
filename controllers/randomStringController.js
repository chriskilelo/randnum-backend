/**
 * TO GOD BE ALL THE GLORY
 * 14-JUL-2023 || 1511
 * This is the controller for handling random string operations
 */

// Require 'express-async-handler' for handling exceptions inside of async express routes
const asyncHandler = require('express-async-handler')

// Require the RandomString Model
const RandomString = require('../models/randomStringModel')

const getRandomStrings = asyncHandler(async () => {
    res.status(200).json({ message: 'GET - fetch the random strings' })
})

const setRandomString = asyncHandler(async () => {
    res.status(200).json({ message: 'POST - create the random string' })
})

const updateRandomString = asyncHandler(async () => {
    res.status(200).json({ message: 'PUT - update the random string' })
})

const deleteRandomString = asyncHandler(async () => {
    res.status(200).json({ message: 'DELETE - destroy the random string' })
})


module.exports = {
    getRandomStrings,
    setRandomString,
    updateRandomString,
    deleteRandomString,
}