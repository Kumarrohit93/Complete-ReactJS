import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function changeCount() {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `Counter: (${count})`
    }, [count])
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={changeCount}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
