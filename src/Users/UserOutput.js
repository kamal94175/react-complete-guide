import React from 'react';
import users from './users.css';
import UserInput from './UserInput';
const userOutput = (props) => {
    return (
        <div className= 'users'>
            <p>My Name is {props.Name}.</p>
            <p>{props.children}</p>
            
        </div>
    )
}

export default userOutput;