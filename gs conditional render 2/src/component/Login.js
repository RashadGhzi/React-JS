import React from 'react'

export default function Login(props) {
    return (
        <div>
            <h2>This is logIn page</h2>
            <button type="button" onClick={props.authLog}>LogIn</button>
        </div>
    )
}
