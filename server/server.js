#!/usr/bin/env node

// Initialize app
const express = require('express');
const cors = require('cors');
const path = require("path");
const debug = require("debug")("express-react:server");
const serverless = require('serverless-http');

// Require any routes here...
const index = require('./routes/index.js');

///////////////////////////////

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.json());

// app.use('/api', index);
app.use('/.netlify/functions/server', index);

// USED LOCALLY
/*
const http = require("http");

// Get the port from environment and store in Express
const port = normalizePort(process.env.PORT || 5000);
app.set("port", port);

// Create HTTP server
// Used locally
// var server = http.createServer(app);
*/


// Setup the database
require('dotenv').config();
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.qw0sk.mongodb.net/recipe_db?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// USED LOCALLY
/*
// Listen on port provided, on all network interfaces
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
*/

/**
 * Normalize a port into a number, string, or false.
 */

// function normalizePort(val) {
//     var port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }
  
/**
 * Event listener for HTTP server "error" event.
 */

// function onError(error) {
//     if (error.syscall !== 'listen') {
//         throw error;
//     }

//     var bind = typeof port === 'string'
//         ? 'Pipe ' + port
//         : 'Port ' + port;

//     // handle specific listen errors with friendly messages
//     switch (error.code) {
//         case 'EACCES':
//         console.error(bind + ' requires elevated privileges');
//         process.exit(1);
//         break;
//         case 'EADDRINUSE':
//         console.error(bind + ' is already in use');
//         process.exit(1);
//         break;
//         default:
//         throw error;
//     }
// }
  
/**
 * Event listener for HTTP server "listening" event.
 */

// function onListening() {
//     var addr = server.address();
//     var bind = typeof addr === 'string'
//         ? 'pipe ' + addr
//         : 'port ' + addr.port;
//     debug('Listening on ' + bind);
// }

module.exports = app;
module.exports.handler = serverless(app);
