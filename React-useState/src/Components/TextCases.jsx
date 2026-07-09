import React, { useState } from 'react'

const TextCases = () => {
    const [text, setText] = useState("Hello")

    function upperCase() {
        setText(text.toUpperCase())
    }

    function lowerCase() {
        setText(text.toLowerCase())
    }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={upperCase}>Uppercase</button>
      <button onClick={lowerCase}>Lowercase</button>
    </div>
  )
}

export default TextCases
