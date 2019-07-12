const express = require('express');
const server = express();

const actionRouter = require('./data/helpers/actionModel.js');
const projectRouter = require('./data/helpers/projectModel.js');


server.use(express.json());

// server.use('/api/actions', actionRouter);
// server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Don't forget to include the homies today</h2>`);
})

module.exports = server;