import React from 'react'

const SayHello = () => {
    function sayHello(name) {
        alert(`Hello, ${name}`)
    }
  return (
    <div>
      <button onClick={() => sayHello("Rohit")}>Click Me</button>
    </div>
  )
}

export default SayHello
