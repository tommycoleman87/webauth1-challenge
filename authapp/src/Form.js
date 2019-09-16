import React, {useState} from 'react';

const Form = (props) => {
    const [user, setUser] = useState({username: '', password: ''});
    
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.submit(user)}}>
                <input type='text' name='username' value={user.username} onChange={(e) => onChangeHandler(e)} placeholder="Username" />
                <input type='text' name='password' value={user.password} onChange={(e) => onChangeHandler(e)} placeholder="Password" />
                <button>Submit</button>
            </form>
    )
}

export default Form;