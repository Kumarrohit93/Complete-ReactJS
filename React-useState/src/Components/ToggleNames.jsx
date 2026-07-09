import React, { useState } from 'react'

const ToggleNames = () => {
    const [name, setName] = useState("Rohit")

    function toggle() {
        if(name === "Rohit") {
            setName("Virat")
        } else {
            setName("Rohit")
        }
    }
  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleNames
