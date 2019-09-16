import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './App.css';
import Axios from 'axios';

function App() {

  const getUsers = () => {
    Axios.get('http://localhost:5000/api/users')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
  <>
  <Route path='/login' component={Login} />
  <Route path='/register' component={Register} />
  <button onClick={getUsers}>Get users</button>
  </>
  );
}

export default App;
