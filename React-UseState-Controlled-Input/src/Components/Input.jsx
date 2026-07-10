import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState("Rohit")

    function handleChange(e) {
        setName(e.target.value)
    }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange}/>
      <h1>Your name is: {name}</h1>
    </div>
  )
}

export default Input
