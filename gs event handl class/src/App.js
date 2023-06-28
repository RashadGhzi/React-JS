import { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'


export default class App extends Component {
  render() {
    return (
      <>
        <Item name='GeekyShows' role="Programmer" />
      </>
    )
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}