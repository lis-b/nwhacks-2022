const express = require('express');
const cors = require('cors');
const path = require("path");

// Require any routes here...
const index = require('./routes/index.js');

///////////////////////////////

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());
// Write any app.use statements for any required routers...
app.use('/api', index);

///////////////////////////////

// Export the app module to use in server.js
module.exports = app;
