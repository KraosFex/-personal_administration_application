// Rements 
const express = require('express')

const server = express();

server.get('/', (req,res) => {
    console.log('Hello world')
})

module.exports = server;
