import React, { Component } from 'react'


// --------Must read---------//

// working with Updating phase life cycle 
// 1.getDerivedStateFromProps
// 2.shouldComponentUpdate 
// 3.render
// 4.getSnapshotBeforeUpdate 
// 5.componentDidUpdate


export default class Student extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            role: this.props.role
        }
    }

    static getDerivedStateFromProps(props, state) {
        //this method run before the shouldComponentUpdate method
        console.log("Student - getDerivedStateFromProps");
        console.log(props, state);
        return { name: props.name, role: props.role };
    }

    shouldComponentUpdate(props, state) {
        // this method run before render method and after getDerivedStateFromProps
        console.log("Student - shouldComponentUpdate");
        console.log(props, state);
        // return false // if return if false it will stop render and will not update in the dom
        return true // by default is (true). if true it will rerender the update
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Student - getSnapshotBeforeUpdate ");
        console.log(prevProps, prevState);
        console.log(this.state);
        return 44;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Student -  componentDidUpdate");
        console.log(prevProps, prevState, snapshot);
        console.log(this.state);
    }

    render() {
        // this render() method run before getSnapshotBeforeUpdate() and after shouldComponentUpdate() method
        console.log('Update phase Life Cycle 3rd method render. [Student children of App component]');
        return (
            <div>
                <div className="name">Name is {this.state.name} </div>
                <div className="subject">Subject is {this.state.role} </div>
            </div>
        )
    }
}
