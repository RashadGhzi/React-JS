import React from 'react'

export default function Item(props) {
    return (
        <div className='content'>
            {/* Appling jsx component children using props.children */}
            Hellow {props.children}
            <div>My name is {props.name}</div>
        </div>
    )
}
