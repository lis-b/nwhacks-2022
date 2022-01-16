const express = require('express');
const path = require("path");
const cors = require('cors');

// Require any routes here...
const index = require('./routes/index.js');

///////////////////////////////

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// Write any app.use statements for any required routers...
app.use('/api', index);

///////////////////////////////

// Export the app module to use in server.js
module.exports = app;
