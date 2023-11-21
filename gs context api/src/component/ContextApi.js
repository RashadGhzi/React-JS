import React from 'react'
import { myContext } from '../App'

export default function ContextApi() {
    return (
        <div>
            <h3>This is ContextApi component</h3>
            <myContext.Consumer>
                {value =>
                    <h2>Name is {value}</h2>
                }
            </myContext.Consumer>
        </div>
    )
}
