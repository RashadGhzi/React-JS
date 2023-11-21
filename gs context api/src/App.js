import React, { useState } from 'react'
import User from './component/User'

export const myContext = React.createContext()
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
            <myContext.Provider value={name}>
                <User />
            </myContext.Provider>
            <button type="button" onClick={handleClick}>button click</button>
        </div>
    )
}
