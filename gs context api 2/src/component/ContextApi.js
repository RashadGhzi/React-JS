import React from 'react'
import { Consumer } from '../Context'

export default function ContextApi() {
    return (
        <div>
            <h3>This is ContextApi component</h3>
            <Consumer>
                {value =>
                    <h2>Name is {value}</h2>
                }
            </Consumer>
        </div>
    )
}
