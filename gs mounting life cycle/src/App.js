import React, { Component } from 'react'
import Student from './component/Student'
import './App.css'

// --------Must read---------//

// working with mounting phase life cycle 
// 1.constructor 
// 2.getDerivedStateFromProps 
// 3.render 
// 4.componentDidMount 

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

  static getDerivedStateFromProps(state, props) {
    console.log(state);
    console.log(props);
    return null
  }


  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "Rakib", role: "student" })
    }, 5000);
  }

  render() {
    return (
      <div>
        <div className="name">Name {this.state.name}</div>
        <div className="role">Role {this.state.role} </div>
        <button className="btn" onClick={this.handleClick}>click</button>
        <Student name="Kabir" subject="Math" />
      </div>
    )
  }
}

