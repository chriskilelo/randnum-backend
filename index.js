// Require dotenv which loads environment variables from the .env file into process.env
require('dotenv').config()
// Require the Express Node.js application framework
const express = require('express')
// Require Os to access operating system related utility methods
const os = require('os')
// Require cluster to run multiple instances of Node.js that can distribute workloads among their application threads
const cluster = require('cluster')
// Specify the port on which the Node.js application will listen for incoming requests
const appPort = process.env.PORT || 5000
// Create an Express application
const app = express();

