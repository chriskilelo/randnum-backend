/**
 * TO GOD BE ALL THE GLORY 
 * 14-JULY-2023 || 1515
 * This is the model that defines the schema of the random_strings collection
 */

// Require mongoose for Object Data Modeling (ODM) in MongoDB
const mongoose = require('mongoose')
// Create the Random String schema
const randomStringSchema = mongoose.Schema(
    {
        random_string: {
            type: String,
            required: [true, 'The random string cannot be empty.']
        },
        generated_by: {
            type: String,
            required: [true, 'Please provide the username of the person generating the random string.'],
            default: 'system'
        },
    },
    {
        timestamps: true,
    }
)
/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = mongoose.model('RandomString', randomStringSchema)