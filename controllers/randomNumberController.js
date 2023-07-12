/**
 * TO GOD BE ALL THE GLORY
 * 12-JUL-2023 1602
 * This is the controller for handling random number operations
 */

// Require 'express-async-handler' for handling exceptions inside of async express routes
const asyncHandler = require('express-async-handler')

// Require the RandomNumber Model
const RandomNumber = require('../models/randomNumberModel')

/**
 * @desc    Retrieve all the random numbers saved in the database.
 * @route   GET /api_v1.0/randomNumbers
 * @access  Private
 */
const getRandomNumbers = asyncHandler(async (req, res) => { })

/**
 * @desc    Insert a new random number into the database
 * @route   POST /api_v1.0/randomNumbers
 * @access  Private
 */
const setRandomNumbers = asyncHandler(async (req, res) => { })

/**
 * @desc    Update a random number whose ID has been specified
 * @route   PUT /api_v1.0/randomNumbers/:id
 * @access  Private
 */
const updateRandomNumbers = asyncHandler(async (req, res) => { })

/**
 * @desc    Delete the random number whose ID has been specified
 * @route   DELETE /api_v1.0/randomNumbers/:id
 * @access  Private
 */
const deleteRandomNumbers = asyncHandler(async (req, res) => { })