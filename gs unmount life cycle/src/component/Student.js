import React, { Component } from 'react'

export default class Student extends Component {

    componentDidMount() {
        console.log('Student - component mount successfully');
    }

    componentWillUnmount() {
        console.log("student component is aobut to unmounting");
    }

    render() {
        return (
            <div>
                <h2>Hello i am harry</h2>
            </div>
        )
    }
}
