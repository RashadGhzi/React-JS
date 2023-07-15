import React, { useState } from 'react'

export default function CtrlMultipleInpur() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name : </label>
                <input type="name" id='name' name='name' onChange={handleChange} value={name} /><br /><br /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' name='password' onChange={handleChange} value={password} />
            </form>
        </div>
    )
}
