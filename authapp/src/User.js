import React, {useState} from 'react';
import Axios from 'axios';

const User = (props) => {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        Axios.get('http://localhost:5000/api/restricted/users')
        .then(res => {
          setUsers(res.data)

        })
        .catch(err => {
          console.log(err)
        })
      }
    
      const logout = () => {
        Axios.get('http://localhost:5000/api/logout')
        .then(res => {
          console.log(res)
          props.history.push('/login');
        })
        .catch(err => {
          console.log(err)
        })
      }
return (
    <div>
    <button onClick={getUsers}>Get users</button>
  <button onClick={logout}>Log Out</button>
  {users.map(user => {
      return <div key={user.id}><h1>{user.username}</h1></div>
  })}
    </div>
)
}

export default User;