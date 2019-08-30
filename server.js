const express = require('express');
const server = express();
const helmet = require('helmet');
const recipeRouter = require('./recipes/recipe-router.js');

server.use(helmet());
server.use(express.json());
server.use('/api/recipebook', recipeRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the api!'
    })
})
module.exports = server;