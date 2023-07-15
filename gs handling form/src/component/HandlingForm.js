import React, { useState } from 'react'

export default function HandlingForm() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = e => {
        // console.log(e.target)
        // console.log(e.target[0]);
        // console.log(e.target[1]);
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        e.preventDefault();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' id="name" value={name} onChange={handleChange} />
                <br />
                <label htmlFor="password" >Password : </label>
                <input type="password" name='password' id='password' value={password} onChange={handleChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
