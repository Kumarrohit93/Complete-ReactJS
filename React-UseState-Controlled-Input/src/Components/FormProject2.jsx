import React, { useState } from 'react'

const FormProject2 = () => {
    const [user, setUser] = useState({
        name: "Rohit", 
        age: 22,
        city: "Sonipat"
    })

    function changeName() {
        setUser({...user, name: "Virat"})
    }

    function changeAge() {
        setUser({...user, age: user.age + 1, city: "Delhi"})
    }

    function changeCity() {
        // setUser({...user, city: "Delhi"})
    }
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.city}</h1>
      <button onClick={changeName}>change Name</button>
      <button onClick={changeAge}>change Age</button>
      <button onClick={changeCity}>change City</button>
    </div>
  )
}

export default FormProject2
