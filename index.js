/**
 * TO GOD BE ALL THE GLORY
 * 12-JUL-2023
 * This is the main/entry file that is invoked when an outside application wants to transact with this system
 */

// Require dotenv which loads environment variables from the .env file into process.env
require('dotenv').config()
// Require colors to enable us to log to the console in different colors
require('colors')
// Require the Express Node.js application framework
const express = require('express')
// Require Os to access operating system related utility methods
const os = require('os')
// Require cluster to run multiple instances of Node.js that can distribute workloads among their application threads
const cluster = require('cluster')
// Require the error handler middleware
const { errorHandler } = require('./middleware/errorHandler')
// Connect to the database as the application is loading
const connectDB = require('./config/db')
// Bring in Mongoose to help with database operations through the models
const { connect } = require('mongoose')
// Open a connection to the database
connectDB()
// Specify the port on which the Node.js application will listen for incoming requests
const appPort = process.env.APP_PORT || 5000
// Create an Express application
const app = express();
// Return a middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json())
// Return a middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
app.use(express.urlencoded({ extended: false }))
// Send all the '/api_v1.0/randomStrings' requests to the 'randomStringRoutes' file for redirection
app.use('/api_v1.0/randomStrings', require('./routes/randomStringRoutes'))
// Make the error handling middleware available through out the application
app.use(errorHandler)

//Check if we are in the master process (the process you start from the command line)
if (cluster.isMaster) {
    // Means we are in the master process. Get the total number of CPUs/cores that this machine has.
    const numWorkers = require('os').cpus().length;
    // Output the number of cores that a machine has
    console.log('Machine has [' + numWorkers + '] CPUs. Preparing to create [' + numWorkers + '] worker processes. ');
    // For each CPU/core available, create a separate WORKER PROCESS to handle requests
    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    //Listen for any worker processes that will come online
    cluster.on('online', function (worker) {
        //Report on each worker process that has successfully been started
        console.log('Worker ' + worker.process.pid + ' is online');

    });
    //Listen for any dying WORKER PROCESSES
    cluster.on('exit', function (worker, code, signal) {
        //Make it known that a particular worker process has died.
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal + '. \nStarting a new worker.');
        //Fork out another WORKER PROCESS to replace the dead one. We are NOT sentimental hapa hivi.
        cluster.fork();
    });
} else {
    // Means we are NOT in the master process, therefore Listen for incoming connections on the designated port
    app.listen(appPort, function (error) {
        //Evaluate if connections were successful or not
        if (error) {
            //Means connection ERROR. 
            console.log(error);
        } else {
            //Means connection SUCCESS. System is listening for requests.
            console.log('Process ' + process.pid + ' is listening for incoming requests on http://localhost:%s', appPort);
        }
    });
}