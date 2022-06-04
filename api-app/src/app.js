// Requirements 
const express = require('express');
const server = express();
const router = require('./routes/index');

// Route main
server.use('/', router);

module.exports = server;
