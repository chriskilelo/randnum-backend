/**
 * TO GOD BE ALL THE GLORY
 * 12-JUL-2023 || 1712
 * This module will handle Mongo DB connectivity
 */

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Open Mongoose's default connection to MongoDB
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // After successful database connection, log a message to the console
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        // In the event of an error, log it on the console
        console.log(error)
        // Terminate the running process synchronously 
        process.exit(1)
    }
}

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = connectDB