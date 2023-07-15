import React from 'react'

export default function Home(props) {
  return (
    <div>
      <h2>We are in Home Page</h2>
      <button type='button' onClick={props.authLog}>LogOut</button>
    </div>
  )
}
