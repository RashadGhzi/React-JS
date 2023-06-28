import React from 'react'

export default function Item(props) {
    return (
        <>
            <div className="content">
                <div className="cnt">
                    <div>Hello {props.name}</div>
                    <div>Role is {props.role}</div>
                    <div>Mark is {props.mark}</div>
                </div>
            </div>
        </>

    )
}
