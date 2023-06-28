import Item from "./Item";
import React from 'react'
import './App.css'

export default function App() {
  return (
    <div>
      {/* passing jsx component children in item component */}
      <Item name="GeekyShows">I am children</Item>
    </div>
  )
}
