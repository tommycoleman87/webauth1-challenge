const express = require('express');
const server = express();
const userRouter = require('./users/usersRoute');
const cors = require('cors')
const restricted = require('./restricted/restrictedRoutes')
const restrictedAuth = require('./auth/restricted-middleware');
server.use(express.json());
server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}))
server.use('/api', userRouter);
server.use('/api/restricted', restrictedAuth, restricted)

module.exports = server;