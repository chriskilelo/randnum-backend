/**
 * TO GOD BE ALL THE GLORY
 * 14-JUL-2023 || 1511
 * This is the controller for handling random string operations
 */

// Require 'express-async-handler' for handling exceptions inside of async express routes
const asyncHandler = require('express-async-handler')
// Bring in the RandomString Model
const RandomString = require('../models/randomStringModel')
// Bring in the helper utility functions
const helpers = require('../helpers/helpers')


/**
 * @desc    Retrieve all the random strings saved in the database.
 * @route   GET /api_v1.0/randomStrings
 * @access  Private
 */
const getRandomStrings = asyncHandler(async (req, res) => {
    // Use 'await' to pause the execution to allow for results to be fetched
    const allRandomStrings = await RandomString.find()
    res.status(200).json(allRandomStrings)
})


/**
 * @desc    Insert a new random string into the database
 * @route   POST /api_v1.0/randomStrings
 * @access  Private
 */
const setRandomString = asyncHandler(async (req, res) => {
    // Compose a random string
    const randomString = generalFunctions.composeRandomString()
    return randomString
    res.status(200).json({ message: 'POST - create the random string' })
})


/**
 * @desc    Update a random string whose ID has been specified
 * @route   PUT /api_v1.0/randomStrings/:id
 * @access  Private
 */
const updateRandomString = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'PUT - update the random string' })
})


/**
 * @desc    Delete the random string whose ID has been specified
 * @route   DELETE /api_v1.0/randomStrings/:id
 * @access  Private
 */
const deleteRandomString = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'DELETE - destroy the random string' })
})

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = {
    getRandomStrings,
    setRandomString,
    updateRandomString,
    deleteRandomString,
}