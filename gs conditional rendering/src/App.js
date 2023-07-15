import React, { useState } from 'react';
import './App.css';
import Home from './component/Home'
import Login from './component/Login'


function App() {
  const [auth, setAuth] = useState(false);
  const logIn = () => {
    setAuth(true);
  }
  const logOut = () => {
    setAuth(false);
  }

  if (auth) {
    return <Home authLog={logOut} />
  } else {
    return <Login authLog={logIn} />
  }
}

export default App;
