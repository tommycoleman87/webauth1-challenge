const express = require('express');
const router = express.Router();
const Users = require('./usersHelpers');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const db = require('../data/db-config');
const sessionConfig = {
    name: 'coconut',
    secret: process.env.SESSION_SECRET || 'coconut',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: db,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 60,
    })

}

router.use(session(sessionConfig))


router.post('/restricted/register', (req, res) => {
    const user = req.body;

    const hashPassword = bcrypt.hashSync(user.password, 14);
    user.password = hashPassword;
    Users.registerUser(user)
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    const user = req.body;
    
    console.log(user)
    Users.findUser(user.username)
    .then(returnedUser => {
        if(returnedUser && bcrypt.compareSync(user.password, returnedUser.password)) {
            req.session.user = returnedUser;
            console.log(req.session.user)
             res.status(200).json({message: `Welcome ${returnedUser.username}`})
        } else {
             res.status(401).json({message: 'You shall not pass!'})
        }
    })
    .catch(err => {
         res.status(500).json(err)
    })
})

router.get('/logout', (req, res) => {
    if(req.session) {
        req.session.destroy(error => {
            if(error) {
                res.status(500).json(error)
            } else{
                res.status(200).json({message: 'Logged out successfully'})
            }
        })
    } else {
        res.status(200).json({message: 'Already logged out'})
    }
})

module.exports = router;