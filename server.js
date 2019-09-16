const express = require('express');
const server = express();
const userRouter = require('./users/usersRoute');

server.use(express.json());
server.use('/api', userRouter);

module.exports = server;