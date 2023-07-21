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
 * @description    Retrieve all the random strings saved in the database.
 * @route   GET /api_v1.0/randomStrings
 * @access  Private
 */
const getAllRandomStrings = asyncHandler(async (req, res) => {
    // Use 'await' to pause the execution until the results are fully fetched
    const allRandomStrings = await RandomString.find()
    // Return HTTP status 200 and the result in JSON format
    res.status(200).json(allRandomStrings)
})

/**
 * @description    Retrieve one random string saved in the database by the ID specified
 * @route   GET /api_v1.0/randomStrings
 * @access  Private
 */
const getRandomString = asyncHandler(async (req, res) => {
    // Search the database to see whether a record matching the ID supplied above will be found.
    const singleRandomStrObject = await RandomString.findById(req.params.id).exec()
    // Check whether there is a record that was found in the database
    if (!singleRandomStrObject) {
        // Means no random string with the ID supplied has been found in the database
        res.status(400)
        // Thrown an error
        throw new Error('Random string not found')
    }
    // Return a 200 OK response and a JSON response of the updated goal
    res.status(200).json(singleRandomStrObject)
})


/**
 * @description    Insert a new random string into the database
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
 * @description    Update a random string whose ID has been specified
 * @route   PUT /api_v1.0/randomStrings/:id
 * @access  Private
 */
const updateRandomString = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'PUT - update the random string' })
})


/**
 * @description    Delete the random string whose ID has been specified
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
    getRandomString,
    setRandomString,
    updateRandomString,
    deleteRandomString,
}