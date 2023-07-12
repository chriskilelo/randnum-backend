/**
 * TO GOD BE ALL THE GLORY 
 * 12-JUL-2023
 * This is the model for Random Number generation
 */

// Require mongoose for Object Data Modeling (ODM) in MongoDB
const mongoose = require('mongoose')
// Create the Random Number schema
const randomNumberSchema = mongoose.Schema()
/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = mongoose.model('RandomNumber', randomNumberSchema)