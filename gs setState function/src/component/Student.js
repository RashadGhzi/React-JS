import React, { useState } from 'react'

export default function Student() {
    let [name, setName] = useState("Rahul");
    console.log(name)

    let handleClick = () => {
        setName("GeekyShows");
        console.log(name)
    }
    return (
        <div>
            <div className="name">His name is {name}</div>
            <button className="btn" onClick={handleClick}> button</button>
        </div>
    )
}
