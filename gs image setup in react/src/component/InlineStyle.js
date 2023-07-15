import React from 'react'

export default function InlineStyle() {
    let btn = {
        color: 'red',
        backgroundColor: 'black',
        fontSize: '50px',
        border: 'none',
    }

    const bg = {
        height: '10vh',
        width: '10vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={bg}>
            <button style={btn} type="button">Button</button>
        </div>
    )
}
