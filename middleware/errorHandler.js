/**
 * TO GOD BE ALL THE GLORY
 * 12-JUL-2023 || 1640
 * This will be the error handling middleware that will be used through out the application
 */

const errorHandler = (err, req, res, next) => {
    // If the Status Code has not been passed in, default to using the Status Code 500
    const statusCode = res.statusCode ? res.statusCode : 500
    // Set the HTTP status on the response
    res.status(statusCode)
    // Set the response to be returned in JSON format
    res.json({
        message : err.message,
        stack: process.env.APP_DOMAIN === 'production' ? null : err.stack
    })
}

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = {
    errorHandler,
}