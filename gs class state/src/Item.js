import React, { Component } from 'react'

// export default class Item extends Component {
//     val = {
//         name: 'Rahul',
//         roll: this.props.roll,
//     }
//     render() {
//         return (
//             <div>
//                 <div className="name">Name is {this.val.name}</div>
//                 <div className="roll">Roll is {this.val.roll}</div>
//             </div>
//         )
//     }
// }


export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            roll: this.props.roll
        }
    }

    render() {
        return (
            <>
                <div className="name">MY name is {this.state.name}</div>
                <div className="roll">Roll is {this.state.roll}</div>
            </>
        )
    }
}