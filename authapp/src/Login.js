import React from 'react';
import axios from 'axios';
import Form from './Form';
axios.defaults.withCredentials = true;
const Login = (props) => {

    const submitLogin = (user) => {
        console.log(user)
        axios.post('http://localhost:5000/api/login', user)
        .then(res => {
            console.log(res)
            props.history.push('/')
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