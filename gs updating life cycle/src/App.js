import React, { Component } from 'react'
import Student from './component/Student'
import './App.css'

// --------Must read---------//

// working with Updating phase life cycle 
// 1.getDerivedStateFromProps
// 2.shouldComponentUpdate 
// 3.render
// 4.getSnapshotBeforeUpdate 
// 5.componentDidUpdate

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Rahul",
      role: "programming",
    }
  }

  handleClick = () => {
    this.setState({
      name: "Rocky",
      role: "Actor"
    })
  }


  render() {
    return (
      <div>
        <div className="name">Name {this.state.name}</div>
        <div className="role">Role {this.state.role} </div>
        <button className="btn" onClick={this.handleClick}>click</button>
        <Student name={this.state.name} role={this.state.role} />
      </div>
    )
  }
}

