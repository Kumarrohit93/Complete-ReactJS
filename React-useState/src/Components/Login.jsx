import React, { useState } from 'react'

const Login = ({name}) => {
    const [isLogin, setLogin] = useState(false)

    function login() {
        setLogin(true)
    }

    function logout() {
        setLogin(false)
    }
  return (
    <div>
      {isLogin ? (<h1>Welcome back, {name}</h1>) : <h1>Please Login</h1>}
      {isLogin ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
    </div>
  )
}

export default Login
