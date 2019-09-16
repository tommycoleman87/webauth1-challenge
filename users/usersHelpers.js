const db = require('../data/db-config');
module.exports = {
    getUsers,
    registerUser,
    findUser
}
function getUsers() {
    return db('users');
}

function findUser(username) {
    return db('users').where({username: username}).first().then(user => {
        return user})
}

function registerUser(user) {

    return db('users').insert(user).then(result => {
        return result;
    })
}