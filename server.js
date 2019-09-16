const express = require('express');
const server = express();
const userRouter = require('./users/usersRoute');
const cors = require('cors')
server.use(express.json());
server.use(cors())
server.use('/api', userRouter);


module.exports = server;