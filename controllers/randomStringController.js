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
const getAllRandomStrings = asyncHandler(async (req, res) => {
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
    const randomStr = helpers.composeRandomString()
    // Create an object to contain the data that needs to be saved
    const randomStringObj = {
        random_string: randomStr,
        generated_by: process.env.DEFAULT_ADMIN_USER
    }
    // Initialize a Document i.e. a new instance of the Model
    const randomStringDoc = new RandomString(randomStringObj)
    // Save the document to Mongo DB. Use await since it returns a promise
    await randomStringDoc.save()
        .then(result => {
            // Means saving successful, log a brief message on the console for status accounting
            console.log('Random string: ' + result.random_string.yellow + ' saved successfully.'.green.bold);
            // Return HTTP Status code 201 - Request has been fulfilled and a new resource has been CREATED
            res.status(201).json(result);
        })
        // The .catch block has not been included because errors are being handled by the [asyncHandler]
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
    getAllRandomStrings,
    setRandomString,
    updateRandomString,
    deleteRandomString,
}