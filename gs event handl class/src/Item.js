import React, { Component } from 'react'


export default class Item extends Component {
    handleClick = () => {
        console.log("button click");
    }

    render() {
        return (
            <>
                <div className="name">Hellow I am {this.props.name}</div>
                <div className="role">I am a {this.props.role}</div>
                <button className="btn" onClick={this.handleClick}>Click</button>

            </>
        )
    }
}