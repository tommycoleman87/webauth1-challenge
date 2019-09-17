const express = require('express');
const router = express.Router();
const Users = require('../users/usersHelpers');

router.get('/users', (req, res) => {
    Users.getUsers()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;