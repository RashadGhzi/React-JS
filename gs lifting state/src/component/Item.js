import React from 'react'

export default function Item(props) {
    return (
        <div>
            <h4>This Item component and there props is {props.num * 2}</h4>
        </div>
    )
}
