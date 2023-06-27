import React from 'react'
import App from './App.css'

export default function Item(props) {
    return (
        <>
            <div className="content">
                <div className="cnt">
                    <div>Hello {props.name}</div>
                    <div>Role is {props.role}</div>
                </div>
            </div>
        </>

    )
}
