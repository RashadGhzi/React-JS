// import react from 'react'
import React, { Component } from "react"
import './App.css'
import Navbar from "./components/Navbar"
import PropTypes from 'prop-types'


// using function based for render component 
// function App(props) {
//     return (
//         <h3>Hello {props.name}</h3>
//     )
// }



// using class based for render component 
class App extends Component {
    render() {
        return (
            <>
                <Navbar first_btn={20} second_btn='Nothing' />
                {/* <Navbar first_btn={20} /> */}
                {/* <Navbar  /> */}
            </>
        )
    }
}

export default App

Navbar.propTypes = {
    first_btn: PropTypes.number.isRequired,
    second_btn: PropTypes.string
};

Navbar.defaultProps = {
    second_btn: 'enter something here'
}