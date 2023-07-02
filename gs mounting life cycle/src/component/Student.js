import React, { Component } from 'react'


// --------Must read---------//

// working with mounting phase life cycle 
// 1.constructor 
// 2.getDerivedStateFromProps 
// 3.render 
// 4.componentDidMount 


export default class Student extends Component {
    render() {
        console.log('Mounting phase Life Cycle 3rd method render. [Student children of App component]')
        return (
            <div>
                <div className="name">Name is {this.props.name} </div>
                <div className="subject">Subject is {this.props.subject} </div>
            </div>
        )
    }
}
