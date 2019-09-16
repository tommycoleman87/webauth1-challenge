import React from 'react';
import axios from 'axios';
import Form from './Form';

const Login = () => {

    const submitLogin = (user) => {
        console.log(user)
        axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Form submit={submitLogin} />
    )
}

export default Login;