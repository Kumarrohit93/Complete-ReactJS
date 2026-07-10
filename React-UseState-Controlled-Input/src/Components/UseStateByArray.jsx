import React, { useState } from 'react'

const UseStateByArray = () => {
    const [fruit, setFruit] = useState([
        "Apple", "Mango"
    ])

    function addFruit() {
        // Fix 1: Wrap the spread operator and new item in an array wrapper []
        setFruit([...fruit, "Banana"])
    }

    return (
        <div>
            <ul>
                {/* Fix 2: Explicitly return the JSX, or use an implicit return () */}
                {fruit.map((fru, index) => (
                    <li key={index}>{fru}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Click</button>
        </div>
    )
}

export default UseStateByArray