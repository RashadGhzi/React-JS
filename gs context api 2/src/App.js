import React, { useState } from 'react'
import User from './component/User'
import { Provider } from './Context';


export default function App() {
    const [name, setName] = useState('Rahul');
    const handleClick = () => {
        if (name === 'Rahul') {
            setName("Rabbi");
        } else {
            setName('Rahul');
        }
    }
    return (
        <div>
            <Provider value={name}>
                <User />
            </Provider>
            <button type="button" onClick={handleClick}>button click</button>
        </div>
    )
}
