import React, { Component } from 'react'

export default class Evnt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Rahul",
            role: this.props.role,
        }
        this.clickCounter = 0;
    }

    hendleClick = () => {
        this.clickCounter++;
        console.log(`Button clicked ${this.clickCounter} time(s).`);
        this.setState({
            name: "Rabbi",
            role: "Graphic Designer"
        })

        if (this.clickCounter >= 4) {
            this.setState({
                name: "Pogba",
                role: "Professional Footballer",
            })
        }
    }


    render() {
        return (
            <div>
                <div className="name">Name is {this.state.name}</div>
                <div className="role">Role is {this.state.role}</div>
                <button className='btn' onClick={this.hendleClick}>click here</button>
            </div>
        )
    }
}
