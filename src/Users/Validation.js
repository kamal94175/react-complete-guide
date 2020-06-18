import React from 'react';
//import users from './users.css';

const validation = (props) => {
    return (
        <div className='users'>
            {
                props.inputLength >= 5 ?

                    <p> text is long enough</p>
                    :
                    <p> text is too short</p>
            }
        </div>
    )
}

export default validation;