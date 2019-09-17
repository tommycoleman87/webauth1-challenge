import React from 'react';
import Form from './Form';
import Axios from 'axios';

const Register = (props) => {

    const registerUser = (user) => {
        Axios.post('http://localhost:5000/api/restricted/register', user)
        .then(res => {
            props.history.push('/login')
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