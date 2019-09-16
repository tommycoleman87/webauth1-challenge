import React from 'react';
import Form from './Form';
import Axios from 'axios';

const Register = () => {

    const registerUser = (user) => {
        Axios.post('http://localhost:5000/api/register', user)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <Form submit={registerUser} />
    )
}

export default Register;