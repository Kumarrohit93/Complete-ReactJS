import React from 'react'

const IfElse = ({name}) => {
    let isLogin = true

    function login() {
        if(isLogin) {
            return <h1>Welome back, {name}</h1>
        } else {
            return <h1>Please Login!</h1>
        }
    }
  return (
    <div>
        {login()}
    </div>
  )
}

export default IfElse
