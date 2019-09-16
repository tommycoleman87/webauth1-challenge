const express = require('express');
const router = express.Router();
const Users = require('./usersHelpers');
const bcrypt = require('bcryptjs');
router.get('/users', (req, res) => {
    Users.getUsers()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/register', (req, res) => {
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
    Users.findUser(user.username)
    .then(u => {
        if(u && bcrypt.compareSync(user.password, u.password)) {
            return res.status(200).json({message: `Welcome ${user.username}`})
        } else {
            return res.status(401).json({message: 'You shall not pass!'})
        }
    })
})

module.exports = router;