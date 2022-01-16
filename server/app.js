const express = require('express');
const path = require("path");

// Require any routes here...
const index = require('./routes/index.js');

///////////////////////////////

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Write any app.use statements for any required routers...
app.use('/api', index);

///////////////////////////////

// TESTING
app.get('/', function(req, res) {
    return res.send("Hello World!");
});

///////////////////////////////


// Export the app module to use in server.js
module.exports = app;
