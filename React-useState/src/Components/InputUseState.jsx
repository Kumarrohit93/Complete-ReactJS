import React, { useState } from 'react'

const InputUseState = () => {
    const [input, setInput] = useState("")

    function inputValue(e) {
        setInput(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={inputValue} placeholder='Enter your name'/>
      <h1>Your Name is: {input}</h1>
    </div>
  )
}

export default InputUseState
